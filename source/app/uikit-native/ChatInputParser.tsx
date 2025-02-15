// app/uikit-native/ChatInputParser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    tango = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = tango;
    var _closure1_slot1 = verify;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, mike);
    romeo = 0;
    mike = verify[romeo];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot2 = mike;
    yankee = 1;
    mike = verify[yankee];
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    offset = 2;
    mike = verify[offset];
    mike = options.bind(entity)(mike);
    mike = mike.processColor;
    var _closure1_slot4 = mike;
    tango = {};
    tango['COMMAND_OPTION'] = romeo;
    golf = 'COMMAND_OPTION';
    tango[romeo] = golf;
    tango['ROLE_HIGHLIGHT'] = yankee;
    oscar = 'ROLE_HIGHLIGHT';
    tango[yankee] = oscar;
    mike = {};
    mike['COMMAND_OPTION'] = romeo;
    mike[romeo] = golf;
    mike['COMMAND_OPTION_WITH_VALUE'] = yankee;
    golf = 'COMMAND_OPTION_WITH_VALUE';
    mike[yankee] = golf;
    mike['EMOJI_HIGHLIGHT'] = offset;
    golf = 'EMOJI_HIGHLIGHT';
    mike[offset] = golf;
    offset = 3;
    mike['USER_HIGHLIGHT'] = offset;
    golf = 'USER_HIGHLIGHT';
    mike[offset] = golf;
    golf = 4;
    mike['ROLE_HIGHLIGHT'] = golf;
    mike[golf] = oscar;
    offset = 5;
    mike['CHANNEL_HIGHLIGHT'] = offset;
    oscar = 'CHANNEL_HIGHLIGHT';
    mike[offset] = oscar;
    offset = 6;
    mike['SILENT_HIGHLIGHT'] = offset;
    oscar = 'SILENT_HIGHLIGHT';
    mike[offset] = oscar;
    oscar = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: ChatInputParser
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            zulu['rules'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'addRule';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = this;
            mike = entity.rules;
            entity = zulu.ruleId;
            mike[entity] = zulu;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'removeRule';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.rules;
            entity = argFoo;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'parse';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.valuesIn;
            mike = this;
            mike = mike.rules;
            tango = zulu.bind(tango)(mike);
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                zulu = argFoo;
                oscar = argBar;
                var _closure4_slot0 = oscar;
                report = oscar.matchFunction;
                tango = _closure3_slot0;
                mike = _closure3_slot1;
                tango = report.bind(oscar)(tango, mike);
                mike = tango.map;
                entity = function(argFoo) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        mike = argFoo;
                        entity = _closure4_slot0;
                        entity = entity.deleteNodeOnBackspace;
                        zulu = 'function';
                        entity = typeof entity;
                        if(!(zulu !== entity)) { _fun00002_ip = 39; continue _fun00001 }
 27:
                        entity = _closure4_slot0;
                        tango = entity.deleteNodeOnBackspace;
                        _fun00002_ip = 54; continue _fun00001;
 39:
                        report = _closure4_slot0;
                        entity = report.deleteNodeOnBackspace;
                        tango = entity.bind(report)(mike);
 54:
                        entity = _closure4_slot0;
                        entity = entity.editDisabled;
                        entity = typeof entity;
                        if(!(zulu !== entity)) { _fun00002_ip = 83; continue _fun00001 }
 71:
                        entity = _closure4_slot0;
                        zulu = entity.editDisabled;
                        _fun00002_ip = 98; continue _fun00001;
 83:
                        report = _closure4_slot0;
                        entity = report.editDisabled;
                        zulu = entity.bind(report)(mike);
 98:
                        entity = {};
                        report = _closure4_slot0;
                        golf = report.type;
                        entity['type'] = golf;
                        golf = report.style;
                        report = null;
                        golf = report == golf;
                        report = undefined;
                        if(golf) { _fun00002_ip = 143; continue _fun00001 }
 129:
                        golf = _closure4_slot0;
                        oscar = golf.style;
                        report = oscar.bind(golf)(mike);
 143:
                        entity['style'] = report;
                        entity['deleteNodeOnBackspace'] = tango;
                        entity['editDisabled'] = zulu;
                        verify = entity;
                        options = mike;
                        mike = copyDataProperties(verify, options);
                        return entity;
                    }
                };
                mike = mike.bind(tango)(entity);
                entity = zulu.concat;
                entity = entity.bind(zulu)(mike);
                return entity;
            };
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    oscar = oscar.bind(entity)();
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'uikit-native/ChatInputParser.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            options = zulu.backgroundColor;
            oscar = zulu.color;
            tango = zulu.borderRadius;
            mike = {'backgroundColor': 0, 'color': 0, 'borderRadius': 0};
            report = null;
            yankee = mike;
            offset = null;
            entity = silentSetPrototypeOf(yankee, offset);
            yankee = {};
            offset = zulu;
            verify = mike;
            mike = copyDataProperties(yankee, offset, verify);
            entity = report != options;
            zulu = null;
            if(!entity) { _fun00004_ip = 101; continue _fun00003 }
 64:
            entity = report != tango;
            zulu = null;
            if(!entity) { _fun00004_ip = 101; continue _fun00003 }
 73:
            entity = {};
            golf = _closure1_slot4;
            report = undefined;
            report = golf.bind(report)(options);
            entity['backgroundColor'] = report;
            entity['cornerRadius'] = tango;
            zulu = entity;
 101:
            entity = {};
            report = _closure1_slot4;
            tango = undefined;
            tango = report.bind(tango)(oscar);
            entity['color'] = tango;
            entity['backgroundStyle'] = zulu;
            yankee = entity;
            offset = mike;
            mike = copyDataProperties(yankee, offset);
            return entity;
        }
    };
    zulu['convertToNativeStyle'] = report;
    zulu['ChatInputParseResultDataType'] = tango;
    zulu['ChatInputNodeType'] = mike;
    return entity;
})();