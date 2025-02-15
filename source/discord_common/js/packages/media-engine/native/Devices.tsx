// discord_common/js/packages/media-engine/native/Devices.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar) { // Original name: sanitizeDevices
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            report = argBar;
            var _closure2_slot0 = tango;
            entity = false;
            var _closure2_slot1 = entity;
            mike = report.map;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    oscar = argBar;
                    report = mike.guid;
                    zulu = mike.guid;
                    backup = mike.name;
                    tango = mike.name;
                    entity = mike.index;
                    mike = mike.facing;
                    offset = _closure2_slot0;
                    options = _closure1_slot4;
                    options = options.VIDEO_INPUT;
                    if(!(offset === options)) { _fun00004_ip = 90; continue _fun00003 }
 63:
                    offset = /^front/i;
                    options = offset.test;
                    options = options.bind(offset)(backup);
                    if(options) { _fun00004_ip = 176; continue _fun00003 }
 90:
                    offset = /^default/;
                    options = offset.test;
                    options = options.bind(offset)(backup);
                    if(options) { _fun00004_ip = 145; continue _fun00003 }
 117:
                    offset = null;
                    options = backup;
                    if(!(offset != report)) { _fun00004_ip = 140; continue _fun00003 }
 126:
                    offset = '';
                    options = backup;
                    if(!(offset !== report)) { _fun00004_ip = 140; continue _fun00003 }
 137:
                    options = report;
 140:
                    report = backup;
                    _fun00004_ip = 184; continue _fun00003;
 145:
                    offset = true;
                    _closure2_slot1 = offset;
                    options = _closure1_slot3;
                    foxtrot = backup.replace;
                    romeo = 'default';
                    offset = 'Default';
                    report = foxtrot.bind(backup)(romeo, offset);
                    _fun00004_ip = 184; continue _fun00003;
 176:
                    options = _closure1_slot3;
                    report = 'Default';
 184:
                    verify = null;
                    if(!(verify != entity)) { _fun00004_ip = 193; continue _fun00003 }
 190:
                    oscar = entity;
 193:
                    entity = {};
                    entity['id'] = options;
                    golf = _closure2_slot0;
                    entity['type'] = golf;
                    entity['index'] = oscar;
                    entity['name'] = report;
                    entity['originalName'] = tango;
                    entity['originalId'] = zulu;
                    entity['facing'] = mike;
                    return entity;
                }
            };
            entity = mike.bind(report)(entity);
            mike = _closure1_slot4;
            mike = mike.VIDEO_INPUT;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 60; continue _fun00001 }
 53:
            zulu = _closure2_slot1;
            mike = !zulu;
 60:
            if(!mike) { _fun00002_ip = 138; continue _fun00001 }
 63:
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            offset = 1;
            zulu = zulu[offset];
            verify = undefined;
            zulu = oscar.bind(verify)(zulu);
            oscar = null;
            golf = oscar == zulu;
            zulu = undefined;
            if(golf) { _fun00002_ip = 134; continue _fun00001 }
 96:
            options = _closure1_slot1;
            golf = _closure1_slot2;
            golf = golf[offset];
            golf = options.bind(verify)(golf);
            golf = golf.os;
            options = oscar == golf;
            zulu = undefined;
            if(options) { _fun00002_ip = 134; continue _fun00001 }
 128:
            zulu = golf.family;
 134:
            mike = oscar != zulu;
 138:
            if(!mike) { _fun00002_ip = 199; continue _fun00001 }
 141:
            golf = /^win/i;
            oscar = golf.test;
            verify = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 1;
            options = options[zulu];
            zulu = undefined;
            zulu = verify.bind(zulu)(options);
            zulu = zulu.os;
            zulu = zulu.family;
            mike = oscar.bind(golf)(zulu);
 199:
            if(!mike) { _fun00002_ip = 245; continue _fun00001 }
 202:
            zulu = entity.unshift;
            mike = {};
            report = _closure1_slot3;
            mike['id'] = report;
            mike['type'] = tango;
            tango = -1;
            mike['index'] = tango;
            tango = 'Default';
            mike['name'] = tango;
            mike = zulu.bind(entity)(mike);
 245:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    options = report.DEFAULT_DEVICE_ID;
    var _closure1_slot3 = options;
    report = report.DeviceTypes;
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/media-engine/native/Devices.tsx';
    report = oscar.bind(golf)(report);
    zulu['sanitizeDevices'] = tango;
    tango = function() { // Original name: getAudioInputDevices
        entity = global;
        zulu = entity.Promise;
        entity = zulu.prototype;
        mike = Object.create(entity, {constructor: {value: zulu}});
        tango = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getVoiceEngine;
            tango = zulu.bind(tango)();
            zulu = tango.getInputDevices;
            mike = function(argFoo) {
                zulu = _closure3_slot0;
                report = _closure1_slot5;
                entity = _closure1_slot4;
                tango = entity.AUDIO_INPUT;
                mike = undefined;
                entity = argFoo;
                entity = report.bind(mike)(tango, entity);
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['getAudioInputDevices'] = tango;
    tango = function() { // Original name: getAudioOutputDevices
        entity = global;
        zulu = entity.Promise;
        entity = zulu.prototype;
        mike = Object.create(entity, {constructor: {value: zulu}});
        tango = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getVoiceEngine;
            tango = zulu.bind(tango)();
            zulu = tango.getOutputDevices;
            mike = function(argFoo) {
                zulu = _closure3_slot0;
                report = _closure1_slot5;
                entity = _closure1_slot4;
                tango = entity.AUDIO_OUTPUT;
                mike = undefined;
                entity = argFoo;
                entity = report.bind(mike)(tango, entity);
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['getAudioOutputDevices'] = tango;
    mike = function() { // Original name: getVideoInputDevices
        entity = global;
        zulu = entity.Promise;
        entity = zulu.prototype;
        mike = Object.create(entity, {constructor: {value: zulu}});
        tango = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getVoiceEngine;
            tango = zulu.bind(tango)();
            zulu = tango.getVideoInputDevices;
            mike = function(argFoo) {
                zulu = _closure3_slot0;
                report = _closure1_slot5;
                entity = _closure1_slot4;
                tango = entity.VIDEO_INPUT;
                mike = undefined;
                entity = argFoo;
                entity = report.bind(mike)(tango, entity);
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['getVideoInputDevices'] = mike;
    return entity;
})();