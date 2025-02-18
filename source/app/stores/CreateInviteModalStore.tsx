// app/stores/CreateInviteModalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot23;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: updateWithLatestInvite
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            entity = argBar;
            oscard = entity.targetType;
            report = entity.targetUserId;
            tangon = entity.targetApplicationId;
            michal = _closure1_slot8;
            entity = michal.getChannel;
            yankee = entity.bind(michal)(verify);
            offset = _closure1_slot9;
            golfie = offset.getGuild;
            option = null;
            romeon = option == yankee;
            entity = undefined;
            michal = undefined;
            if(romeon) { _fun00006_ip = 68; continue _fun00005 }
 63:
            michal = yankee.guild_id;
 68:
            yankee = golfie.bind(offset)(michal);
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 10;
            michal = offset[michal];
            offset = golfie.bind(entity)(michal);
            golfie = offset.getDefaultInviteExpiration;
            michal = {};
            michal['guild'] = yankee;
            golfie = golfie.bind(offset)(michal);
            if(!(option == golfie)) { _fun00006_ip = 118; continue _fun00005 }
 114:
            golfie = _closure1_slot18;
 118:
            yankee = _closure1_slot10;
            offset = yankee.getInvite;
            michal = {};
            michal['targetType'] = oscard;
            michal['targetUserId'] = report;
            michal['targetApplicationId'] = tangon;
            michal = offset.bind(yankee)(verify, michal);
            var _closure1_slot14 = michal;
            michal = {};
            michal['channelId'] = verify;
            verify = _closure1_slot14;
            if(!(option != verify)) { _fun00006_ip = 179; continue _fun00005 }
 169:
            verify = _closure1_slot14;
            golfie = verify.maxAge;
 179:
            michal['maxAge'] = golfie;
            golfie = _closure1_slot14;
            if(!(option == golfie)) { _fun00006_ip = 198; continue _fun00005 }
 192:
            golfie = _closure1_slot19;
            _fun00006_ip = 208; continue _fun00005;
 198:
            verify = _closure1_slot14;
            golfie = verify.maxUses;
 208:
            michal['maxUses'] = golfie;
            golfie = _closure1_slot14;
            golfie = option != golfie;
            if(!golfie) { _fun00006_ip = 234; continue _fun00005 }
 224:
            verify = _closure1_slot14;
            golfie = verify.temporary;
 234:
            michal['temporary'] = golfie;
            golfie = _closure1_slot14;
            option = option != golfie;
            golfie = 0;
            if(!option) { _fun00006_ip = 261; continue _fun00005 }
 252:
            option = _closure1_slot14;
            golfie = option.flags;
 261:
            michal['flags'] = golfie;
            michal['targetType'] = oscard;
            michal['targetUserId'] = report;
            michal['targetApplicationId'] = tangon;
            var _closure1_slot15 = michal;
            var _closure1_slot16 = michal;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: init
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.guildId;
            var _closure1_slot12 = entity;
            entity = null;
            var _closure1_slot13 = entity;
            tangon = michal.targetType;
            report = entity != tangon;
            oscard = null;
            if(!report) { _fun00008_ip = 39; continue _fun00007 }
 36:
            oscard = tangon;
 39:
            tangon = michal.targetUserId;
            golfie = entity != tangon;
            report = null;
            if(!golfie) { _fun00008_ip = 57; continue _fun00007 }
 54:
            report = tangon;
 57:
            tangon = michal.targetApplicationId;
            golfie = entity != tangon;
            entity = null;
            if(!golfie) { _fun00008_ip = 75; continue _fun00007 }
 72:
            entity = tangon;
 75:
            tangon = _closure1_slot24;
            zuuluu = michal.channelId;
            michal = {};
            michal['targetType'] = oscard;
            michal['targetUserId'] = report;
            michal['targetApplicationId'] = entity;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.FormStates;
    var _closure1_slot11 = michal;
    option = 9;
    verify = oscard[option];
    verify = golfie.bind(entity)(verify);
    verify = verify.INVITE_OPTIONS_7_DAYS;
    verify = verify.value;
    var _closure1_slot18 = verify;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = option.INVITE_OPTIONS_UNLIMITED;
    option = option.value;
    var _closure1_slot19 = option;
    michal = michal.CLOSED;
    var _closure1_slot20 = michal;
    michal = false;
    var _closure1_slot21 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: CreateInviteModalStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot22;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'init';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot10;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        golfie = 'isOpen';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot20;
            entity = _closure1_slot11;
            entity = entity.CLOSED;
            entity = michal !== entity;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'isSubmitting';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getGuildId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getError';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getInvite';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getInviteSettings';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getPendingSettings';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getProps';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'onClose';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot17;
            return entity;
        };
        report['get'] = oscard;
        entity[9] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'CreateInviteModalStore';
    option['displayName'] = michal;
    michal = 13;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleInit
        zuuluu = _closure1_slot25;
        entity = undefined;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['CREATE_INVITE_MODAL_INIT'] = verify;
    verify = function(argFoo) { // Original name: handleModalOpen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot11;
            entity = entity.OPEN;
            _closure1_slot20 = entity;
            report = zuuluu.onClose;
            entity = null;
            oscard = entity != report;
            entity = undefined;
            tangon = undefined;
            if(!oscard) { _fun00010_ip = 42; continue _fun00009 }
 39:
            tangon = report;
 42:
            var _closure1_slot17 = tangon;
            michal = _closure1_slot25;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    michal['CREATE_INVITE_MODAL_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateSettings
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.settings;
            tangon = _closure1_slot16;
            entity = null;
            if(!(entity != tangon)) { _fun00012_ip = 49; continue _fun00011 }
 22:
            entity = {};
            report = _closure1_slot16;
            oscard = entity;
            tangon = copyDataProperties(oscard, report);
            oscard = entity;
            report = zuuluu;
            zuuluu = copyDataProperties(oscard, report);
            _closure1_slot16 = entity;
 49:
            entity = undefined;
            return entity;
        }
    };
    michal['CREATE_INVITE_MODAL_UPDATE_SETTINGS'] = verify;
    verify = function() { // Original name: handleResetSettings
        entity = _closure1_slot15;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    michal['CREATE_INVITE_MODAL_RESET_SETTINGS'] = verify;
    verify = function() { // Original name: handleGenerateInvite
        entity = _closure1_slot16;
        _closure1_slot15 = entity;
        entity = true;
        _closure1_slot21 = entity;
        entity = undefined;
        return entity;
    };
    michal['CREATE_INVITE_MODAL_GENERATE_INVITE'] = verify;
    verify = function(argFoo) { // Original name: handleGenerateInviteSuccess
        entity = argFoo;
        tangon = entity.channelId;
        report = null;
        _closure1_slot13 = report;
        entity = false;
        _closure1_slot21 = entity;
        oscard = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 11;
        zuuluu = zuuluu[entity];
        entity = undefined;
        oscard = oscard.bind(entity)(zuuluu);
        zuuluu = _closure1_slot15;
        report = report != zuuluu;
        zuuluu = 'No invite settings for generated invite';
        zuuluu = oscard.bind(entity)(report, zuuluu);
        report = _closure1_slot15;
        zuuluu = _closure1_slot24;
        michal = {};
        oscard = report.targetType;
        michal['targetType'] = oscard;
        oscard = report.targetUserId;
        michal['targetUserId'] = oscard;
        report = report.targetApplicationId;
        michal['targetApplicationId'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    michal['CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS'] = verify;
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
    michal['CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE'] = verify;
    tangon = function() { // Original name: handleModalClose
        entity = _closure1_slot11;
        entity = entity.CLOSED;
        _closure1_slot20 = entity;
        entity = undefined;
        _closure1_slot17 = entity;
        return entity;
    };
    michal['CREATE_INVITE_MODAL_CLOSE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/CreateInviteModalStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();