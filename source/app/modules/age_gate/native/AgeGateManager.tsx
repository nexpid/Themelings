// app/modules/age_gate/native/AgeGateManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123007: for(var _fun123007_ip = 0; ; ) switch(_fun123007_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun123007_ip = 51; continue _fun123007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123007_ip = 92; continue _fun123007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123007_ip = 71; continue _fun123007 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123008: for(var _fun123008_ip = 0; ; ) switch(_fun123008_ip) {
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
            _fun123008_ip = 76; continue _fun123008;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
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
    tango = report.bind(entity)(tango);
    options = tango.EXISTING_USER_AGE_GATE_MODAL_KEY;
    var _closure1_slot11 = options;
    tango = tango.AgeGateSource;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot13 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: AgeGateManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot4;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot14;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = {};
            zulu = entity.handleChannelSelect;
            mike['CHANNEL_SELECT'] = zulu;
            zulu = entity.handleAgeGateModalOpen;
            mike['AGE_GATE_MODAL_OPEN'] = zulu;
            zulu = entity.handleAgeGateModalClose;
            mike['AGE_GATE_MODAL_CLOSE'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'handleChannelSelect';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun123013: for(var _fun123013_ip = 0; ; ) switch(_fun123013_ip) {
 0:
                entity = argFoo;
                mike = entity.guildId;
                report = entity.channelId;
                tango = _closure1_slot9;
                zulu = tango.getChannel;
                golf = zulu.bind(tango)(report);
                report = null;
                if(!(report != mike)) { _fun123013_ip = 165; continue _fun123013 }
 39:
                mike = report == golf;
                tango = undefined;
                zulu = undefined;
                if(mike) { _fun123013_ip = 55; continue _fun123013 }
 50:
                zulu = golf.type;
 55:
                mike = _closure1_slot13;
                mike = mike.GUILD_VOICE;
                if(!(zulu !== mike)) { _fun123013_ip = 165; continue _fun123013 }
 69:
                zulu = _closure1_slot10;
                mike = zulu.getCurrentUser;
                zulu = mike.bind(zulu)();
                oscar = report == golf;
                mike = undefined;
                if(oscar) { _fun123013_ip = 101; continue _fun123013 }
 91:
                oscar = golf.isNSFW;
                mike = oscar.bind(golf)();
 101:
                if(!mike) { _fun123013_ip = 108; continue _fun123013 }
 104:
                mike = report != zulu;
 108:
                if(!mike) { _fun123013_ip = 121; continue _fun123013 }
 111:
                zulu = zulu.nsfwAllowed;
                mike = report == zulu;
 121:
                if(!mike) { _fun123013_ip = 165; continue _fun123013 }
 124:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 10;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.openAgeGateModal;
                entity = _closure1_slot12;
                entity = entity.NSFW_CHANNEL;
                entity = mike.bind(zulu)(entity);
 165:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'handleAgeGateModalOpen';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            golf = entity.source;
            var _closure3_slot0 = golf;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 11;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.pushLazy;
            tango = _closure1_slot3;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun123016: for(var _fun123016_ip = 0; ; ) switch(_fun123016_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun123016_ip = 140; continue _fun123016 }
 10:
                        tango = _closure1_slot0;
                        mike = _closure1_slot2;
                        zulu = 13;
                        zulu = mike[zulu];
                        golf = undefined;
                        tango = tango.bind(golf)(zulu);
                        zulu = 12;
                        zulu = mike[zulu];
                        mike = mike.paths;
                        mike = tango.bind(golf)(zulu, mike);
                        SaveGenerator(address=57);
 55:
                        return mike;
 57:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun123016_ip = 137; continue _fun123016 }
 63:
                        zulu = mike.default;
                        oscar = _closure3_slot0;
                        tango = _closure1_slot12;
                        tango = tango.AUTH;
                        if(!(oscar === tango)) { _fun123016_ip = 134; continue _fun123016 }
 89:
                        tango = {};
                        oscar = _closure1_slot0;
                        options = _closure1_slot2;
                        report = 14;
                        report = options[report];
                        report = oscar.bind(golf)(report);
                        report = report.ModalAnimation;
                        report = report.SLIDE_IN_OUT;
                        tango['animation'] = report;
                        zulu['modalConfig'] = tango;
 134:
                        return zulu;
 137:
                        return mike;
 140:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(entity)(zulu);
            zulu = {};
            zulu['source'] = golf;
            mike = _closure1_slot11;
            mike = report.bind(oscar)(tango, zulu, mike);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleAgeGateModalClose';
        report['key'] = golf;
        oscar = function() { // Original name: value
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 11;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.popWithKey;
            mike = _closure1_slot11;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/age_gate/native/AgeGateManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();