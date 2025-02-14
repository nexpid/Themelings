// discord_common/js/packages/media-engine/webrtc/Devices.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun50992: for(var _fun50992_ip = 0; ; ) switch(_fun50992_ip) {
 0:
        golf = argBar;
        zulu = argFred;
        options = argPlugh;
        entity = function(argFoo) { // Original name: getDefaultDevice
            entity = {};
            mike = _closure1_slot1;
            entity['id'] = mike;
            mike = argFoo;
            entity['type'] = mike;
            mike = 0;
            entity['index'] = mike;
            mike = 'Default';
            entity['name'] = mike;
            return entity;
        };
        var _closure1_slot5 = entity;
        entity = function() { // Original name: getDefaultDevices
            tango = _closure1_slot5;
            entity = _closure1_slot2;
            entity = entity.AUDIO_INPUT;
            zulu = undefined;
            report = tango.bind(zulu)(entity);
            entity = new Array(3);
            entity[0] = report;
            report = _closure1_slot2;
            report = report.AUDIO_OUTPUT;
            report = tango.bind(zulu)(report);
            entity[1] = report;
            mike = _closure1_slot2;
            mike = mike.VIDEO_INPUT;
            mike = tango.bind(zulu)(mike);
            entity[2] = mike;
            return entity;
        };
        var _closure1_slot6 = entity;
        entity = function(argFoo, argBar) { // Original name: filterDevices
            zulu = argFoo;
            mike = argBar;
            var _closure2_slot0 = mike;
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        var _closure1_slot7 = entity;
        entity = function() { // Original name: enumerateDevices
            _fun50997: for(var _fun50997_ip = 0; ; ) switch(_fun50997_ip) {
 0:
                entity = _closure1_slot3;
                tango = global;
                if(entity) { _fun50997_ip = 47; continue _fun50997 }
 14:
                oscar = tango.Promise;
                entity = oscar.prototype;
                report = Object.create(entity, {constructor: {value: oscar}});
                golf = function(argFoo) {
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    entity = global;
                    zulu = entity.setImmediate;
                    entity = undefined;
                    mike = function() {
                        zulu = _closure3_slot0;
                        entity = _closure1_slot6;
                        mike = undefined;
                        entity = entity.bind(mike)();
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                options = report;
                entity = new options[oscar](golf, oscar);
                entity = entity instanceof Object ? entity : report;
                _fun50997_ip = 114; continue _fun50997;
 47:
                tango = tango.navigator;
                report = tango.mediaDevices;
                tango = report.enumerateDevices;
                oscar = tango.bind(report)();
                report = oscar.then;
                tango = function(argFoo) {
                    tango = argFoo;
                    mike = 0;
                    var _closure3_slot0 = mike;
                    var _closure3_slot1 = mike;
                    var _closure3_slot2 = mike;
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        _fun50999: for(var _fun50999_ip = 0; ; ) switch(_fun50999_ip) {
 0:
                            entity = argFoo;
                            mike = entity.kind;
                            zulu = _closure1_slot2;
                            zulu = zulu.AUDIO_INPUT;
                            if(!(zulu !== mike)) { _fun50999_ip = 57; continue _fun50999 }
 25:
                            zulu = _closure1_slot2;
                            zulu = zulu.AUDIO_OUTPUT;
                            if(!(zulu !== mike)) { _fun50999_ip = 57; continue _fun50999 }
 39:
                            entity = _closure1_slot2;
                            entity = entity.VIDEO_INPUT;
                            if(!(entity !== mike)) { _fun50999_ip = 57; continue _fun50999 }
 53:
                            entity = false;
                            return entity;
 57:
                            entity = true;
                            return entity;
                        }
                    };
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.map;
                    entity = function(argFoo) {
                        _fun51000: for(var _fun51000_ip = 0; ; ) switch(_fun51000_ip) {
 0:
                            zulu = argFoo;
                            tango = zulu.kind;
                            mike = _closure1_slot2;
                            mike = mike.AUDIO_INPUT;
                            if(!(mike !== tango)) { _fun51000_ip = 90; continue _fun51000 }
 25:
                            mike = _closure1_slot2;
                            mike = mike.AUDIO_OUTPUT;
                            if(!(mike !== tango)) { _fun51000_ip = 68; continue _fun51000 }
 39:
                            entity = _closure1_slot2;
                            entity = entity.VIDEO_INPUT;
                            entity = _closure3_slot2;
                            oscar = parseFloat(entity);
                            entity = oscar + 1;
                            _closure3_slot2 = entity;
                            _fun51000_ip = 110; continue _fun51000;
 68:
                            entity = _closure3_slot1;
                            entity = parseFloat(entity);
                            mike = entity + 1;
                            _closure3_slot1 = mike;
                            oscar = entity;
                            _fun51000_ip = 110; continue _fun51000;
 90:
                            entity = _closure3_slot0;
                            entity = parseFloat(entity);
                            mike = entity + 1;
                            _closure3_slot0 = mike;
                            oscar = entity;
 110:
                            entity = {};
                            mike = zulu.deviceId;
                            entity['id'] = mike;
                            mike = zulu.kind;
                            entity['type'] = mike;
                            entity['index'] = oscar;
                            tango = zulu.label;
                            mike = null;
                            if(!(mike != tango)) { _fun51000_ip = 159; continue _fun51000 }
 146:
                            tango = zulu.label;
                            mike = '';
                            if(!(mike === tango)) { _fun51000_ip = 195; continue _fun51000 }
 159:
                            mike = 'Default';
                            tango = 0;
                            if(!(tango !== oscar)) { _fun51000_ip = 193; continue _fun51000 }
 169:
                            tango = global;
                            tango = tango.HermesInternal;
                            report = tango.concat;
                            tango = 'Device ';
                            mike = report.bind(tango)(oscar);
 193:
                            _fun51000_ip = 200; continue _fun51000;
 195:
                            mike = zulu.label;
 200:
                            entity['name'] = mike;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                report = report.bind(oscar)(tango);
                tango = report.then;
                zulu = function(argFoo) {
                    _fun51001: for(var _fun51001_ip = 0; ; ) switch(_fun51001_ip) {
 0:
                        report = argFoo;
                        mike = _closure1_slot4;
                        entity = report;
                        if(mike) { _fun51001_ip = 67; continue _fun51001 }
 16:
                        tango = report.filter;
                        mike = function(argFoo) {
                            entity = argFoo;
                            mike = entity.type;
                            entity = _closure1_slot2;
                            entity = entity.AUDIO_OUTPUT;
                            entity = mike !== entity;
                            return entity;
                        };
                        mike = tango.bind(report)(mike);
                        tango = mike.push;
                        oscar = _closure1_slot5;
                        zulu = _closure1_slot2;
                        report = zulu.AUDIO_OUTPUT;
                        zulu = undefined;
                        zulu = oscar.bind(zulu)(report);
                        zulu = tango.bind(mike)(zulu);
                        entity = mike;
 67:
                        return entity;
                    }
                };
                tango = tango.bind(report)(zulu);
                zulu = tango.catch;
                mike = _closure1_slot6;
                entity = zulu.bind(tango)(mike);
 114:
                return entity;
            }
        };
        var _closure1_slot8 = entity;
        entity = function() { // Original name: _getAudioInputDevices
            report = undefined;
            entity = undefined;
            tango = _closure1_slot0;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun51007: for(var _fun51007_ip = 0; ; ) switch(_fun51007_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun51007_ip = 56; continue _fun51007 }
 7:
                        report = _closure1_slot7;
                        mike = _closure1_slot8;
                        tango = undefined;
                        mike = mike.bind(tango)();
                        SaveGenerator(address=28);
 26:
                        return mike;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscar) { _fun51007_ip = 53; continue _fun51007 }
 34:
                        zulu = _closure1_slot2;
                        zulu = zulu.AUDIO_INPUT;
                        zulu = report.bind(tango)(mike, zulu);
                        return zulu;
 53:
                        return mike;
 56:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot9 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot9 = entity;
        entity = function() { // Original name: _getAudioOutputDevices
            report = undefined;
            entity = undefined;
            tango = _closure1_slot0;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun51010: for(var _fun51010_ip = 0; ; ) switch(_fun51010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun51010_ip = 56; continue _fun51010 }
 7:
                        report = _closure1_slot7;
                        mike = _closure1_slot8;
                        tango = undefined;
                        mike = mike.bind(tango)();
                        SaveGenerator(address=28);
 26:
                        return mike;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscar) { _fun51010_ip = 53; continue _fun51010 }
 34:
                        zulu = _closure1_slot2;
                        zulu = zulu.AUDIO_OUTPUT;
                        zulu = report.bind(tango)(mike, zulu);
                        return zulu;
 53:
                        return mike;
 56:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot10 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot10 = entity;
        entity = function() { // Original name: _getVideoInputDevices
            report = undefined;
            entity = undefined;
            tango = _closure1_slot0;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun51013: for(var _fun51013_ip = 0; ; ) switch(_fun51013_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun51013_ip = 56; continue _fun51013 }
 7:
                        report = _closure1_slot7;
                        mike = _closure1_slot8;
                        tango = undefined;
                        mike = mike.bind(tango)();
                        SaveGenerator(address=28);
 26:
                        return mike;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscar) { _fun51013_ip = 53; continue _fun51013 }
 34:
                        zulu = _closure1_slot2;
                        zulu = zulu.VIDEO_INPUT;
                        zulu = report.bind(tango)(mike, zulu);
                        return zulu;
 53:
                        return mike;
 56:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot11 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot11 = entity;
        entity = function() { // Original name: _getDevices
            report = undefined;
            entity = undefined;
            tango = _closure1_slot0;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun51016: for(var _fun51016_ip = 0; ; ) switch(_fun51016_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun51016_ip = 104; continue _fun51016 }
 7:
                        mike = _closure1_slot8;
                        oscar = undefined;
                        mike = mike.bind(oscar)();
                        SaveGenerator(address=24);
 22:
                        return mike;
 24:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun51016_ip = 101; continue _fun51016 }
 30:
                        report = _closure1_slot7;
                        zulu = _closure1_slot2;
                        zulu = zulu.AUDIO_INPUT;
                        golf = report.bind(oscar)(mike, zulu);
                        zulu = new Array(3);
                        zulu[0] = golf;
                        golf = _closure1_slot2;
                        golf = golf.AUDIO_OUTPUT;
                        golf = report.bind(oscar)(mike, golf);
                        zulu[1] = golf;
                        tango = _closure1_slot2;
                        tango = tango.VIDEO_INPUT;
                        tango = report.bind(oscar)(mike, tango);
                        zulu[2] = tango;
                        return zulu;
 101:
                        return mike;
 104:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot12 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot12 = entity;
        oscar = global;
        verify = oscar.Object;
        report = verify.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = report.bind(verify)(zulu, entity, tango);
        entity = 0;
        report = options[entity];
        tango = argBaz;
        entity = undefined;
        tango = tango.bind(entity)(report);
        var _closure1_slot0 = tango;
        tango = 1;
        tango = options[tango];
        tango = golf.bind(entity)(tango);
        report = tango.DEFAULT_DEVICE_ID;
        var _closure1_slot1 = report;
        tango = tango.DeviceTypes;
        var _closure1_slot2 = tango;
        tango = oscar.navigator;
        tango = tango.mediaDevices;
        verify = null;
        report = verify != tango;
        if(!report) { _fun50992_ip = 210; continue _fun50992 }
 188:
        tango = oscar.navigator;
        tango = tango.mediaDevices;
        tango = tango.enumerateDevices;
        report = verify != tango;
 210:
        var _closure1_slot3 = report;
        tango = report;
        if(!tango) { _fun50992_ip = 241; continue _fun50992 }
 220:
        oscar = oscar.HTMLAudioElement;
        verify = oscar.prototype;
        oscar = 'setSinkId';
        tango = oscar in verify;
 241:
        var _closure1_slot4 = tango;
        oscar = 2;
        oscar = options[oscar];
        options = golf.bind(entity)(oscar);
        golf = options.fileFinishedImporting;
        oscar = '../discord_common/js/packages/media-engine/webrtc/Devices.tsx';
        oscar = golf.bind(options)(oscar);
        zulu['CAN_SET_DEVICES'] = report;
        zulu['CAN_SET_OUTPUT_DEVICES'] = tango;
        tango = function() { // Original name: getAudioInputDevices
            entity = undefined;
            tango = _closure1_slot9;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['getAudioInputDevices'] = tango;
        tango = function() { // Original name: getAudioOutputDevices
            entity = undefined;
            tango = _closure1_slot10;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['getAudioOutputDevices'] = tango;
        tango = function() { // Original name: getVideoInputDevices
            entity = undefined;
            tango = _closure1_slot11;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['getVideoInputDevices'] = tango;
        mike = function() { // Original name: getDevices
            entity = undefined;
            tango = _closure1_slot12;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['getDevices'] = mike;
        return entity;
    }
})();