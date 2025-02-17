// app/stores/EditMessageStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot12;
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
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    mike = {};
    var _closure1_slot9 = mike;
    mike = {};
    var _closure1_slot10 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: EditMessageStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
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
        entity = 'isEditing';
        report['key'] = entity;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = _closure1_slot9;
                entity = argFoo;
                entity = mike[entity];
                mike = null;
                zulu = mike == entity;
                mike = undefined;
                if(zulu) { _fun00006_ip = 30; continue _fun00005 }
 25:
                mike = entity.messageId;
 30:
                entity = argBar;
                entity = mike === entity;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'isEditingAny';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot9;
            entity = argFoo;
            mike = mike[entity];
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getEditingTextValue';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = _closure1_slot9;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00008_ip = 31; continue _fun00007 }
 25:
                entity = mike.textValue;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getEditingRichValue';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = _closure1_slot9;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00010_ip = 31; continue _fun00009 }
 25:
                entity = mike.richValue;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getEditingMessageId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = _closure1_slot9;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00012_ip = 30; continue _fun00011 }
 25:
                entity = mike.messageId;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getEditingMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                entity = _closure1_slot9;
                mike = entity[report];
                oscar = null;
                tango = oscar != mike;
                entity = null;
                if(!tango) { _fun00014_ip = 60; continue _fun00013 }
 25:
                tango = mike.messageId;
                tango = oscar != tango;
                entity = null;
                if(!tango) { _fun00014_ip = 60; continue _fun00013 }
 39:
                tango = _closure1_slot8;
                zulu = tango.getMessage;
                mike = mike.messageId;
                entity = zulu.bind(tango)(report, mike);
 60:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getEditActionSource';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot10;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'EditMessageStore';
    options['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleMessageStartEdit
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            options = entity.messageId;
            golf = entity.content;
            zulu = entity.source;
            verify = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 6;
            report = romeo[entity];
            entity = undefined;
            report = verify.bind(entity)(report);
            oscar = report.UseLegacyChatInput;
            report = oscar.getSetting;
            yankee = report.bind(oscar)();
            oscar = _closure1_slot1;
            report = 7;
            report = romeo[report];
            oscar = oscar.bind(entity)(report);
            report = oscar.unparse;
            offset = report.bind(oscar)(golf, tango);
            oscar = _closure1_slot9;
            report = {};
            report['channelId'] = tango;
            report['messageId'] = options;
            report['textValue'] = offset;
            options = 8;
            options = romeo[options];
            verify = verify.bind(entity)(options);
            options = verify.toRichValue;
            if(!yankee) { _fun00016_ip = 135; continue _fun00015 }
 132:
            golf = offset;
 135:
            golf = options.bind(verify)(golf);
            report['richValue'] = golf;
            oscar[tango] = report;
            mike = _closure1_slot10;
            mike[tango] = zulu;
            return entity;
        }
    };
    mike['MESSAGE_START_EDIT'] = verify;
    verify = function(argFoo) { // Original name: handleMessageUpdateEdit
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            oscar = entity.textValue;
            report = entity.richValue;
            mike = _closure1_slot9;
            tango = mike[zulu];
            mike = null;
            if(!(mike != tango)) { _fun00018_ip = 79; continue _fun00017 }
 37:
            mike = _closure1_slot9;
            entity = {};
            options = entity;
            golf = tango;
            tango = copyDataProperties(options, golf);
            tango = 'textValue';
            entity[tango] = oscar;
            tango = 'richValue';
            entity[tango] = report;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
 79:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_UPDATE_EDIT'] = verify;
    tango = function(argFoo) { // Original name: handleMessageEndEdit
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            mike = entity.channelId;
            tango = null;
            if(!(tango != mike)) { _fun00020_ip = 49; continue _fun00019 }
 14:
            zulu = _closure1_slot9;
            zulu = zulu[mike];
            if(!(tango != zulu)) { _fun00020_ip = 49; continue _fun00019 }
 29:
            zulu = _closure1_slot9;
            zulu = delete zulu[mike];
            entity = _closure1_slot10;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
 49:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_END_EDIT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/EditMessageStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();