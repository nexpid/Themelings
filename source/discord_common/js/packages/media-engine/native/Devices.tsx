// discord_common/js/packages/media-engine/native/Devices.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo, argBar) { // Original name: sanitizeDevices
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            var _closure2_slot0 = tangon;
            entity = false;
            var _closure2_slot1 = entity;
            michal = report.map;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    oscard = argBar;
                    report = michal.guid;
                    zuuluu = michal.guid;
                    backup = michal.name;
                    tangon = michal.name;
                    entity = michal.index;
                    michal = michal.facing;
                    offset = _closure2_slot0;
                    option = _closure1_slot4;
                    option = option.VIDEO_INPUT;
                    if(!(offset === option)) { _fun00004_ip = 90; continue _fun00003 }
 63:
                    offset = /^front/i;
                    option = offset.test;
                    option = option.bind(offset)(backup);
                    if(option) { _fun00004_ip = 176; continue _fun00003 }
 90:
                    offset = /^default/;
                    option = offset.test;
                    option = option.bind(offset)(backup);
                    if(option) { _fun00004_ip = 145; continue _fun00003 }
 117:
                    offset = null;
                    option = backup;
                    if(!(offset != report)) { _fun00004_ip = 140; continue _fun00003 }
 126:
                    offset = '';
                    option = backup;
                    if(!(offset !== report)) { _fun00004_ip = 140; continue _fun00003 }
 137:
                    option = report;
 140:
                    report = backup;
                    _fun00004_ip = 184; continue _fun00003;
 145:
                    offset = true;
                    _closure2_slot1 = offset;
                    option = _closure1_slot3;
                    foxtra = backup.replace;
                    romeon = 'default';
                    offset = 'Default';
                    report = foxtra.bind(backup)(romeon, offset);
                    _fun00004_ip = 184; continue _fun00003;
 176:
                    option = _closure1_slot3;
                    report = 'Default';
 184:
                    verify = null;
                    if(!(verify != entity)) { _fun00004_ip = 193; continue _fun00003 }
 190:
                    oscard = entity;
 193:
                    entity = {};
                    entity['id'] = option;
                    golfie = _closure2_slot0;
                    entity['type'] = golfie;
                    entity['index'] = oscard;
                    entity['name'] = report;
                    entity['originalName'] = tangon;
                    entity['originalId'] = zuuluu;
                    entity['facing'] = michal;
                    return entity;
                }
            };
            entity = michal.bind(report)(entity);
            michal = _closure1_slot4;
            michal = michal.VIDEO_INPUT;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 60; continue _fun00001 }
 53:
            zuuluu = _closure2_slot1;
            michal = !zuuluu;
 60:
            if(!michal) { _fun00002_ip = 138; continue _fun00001 }
 63:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            offset = 1;
            zuuluu = zuuluu[offset];
            verify = undefined;
            zuuluu = oscard.bind(verify)(zuuluu);
            oscard = null;
            golfie = oscard == zuuluu;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 134; continue _fun00001 }
 96:
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[offset];
            golfie = option.bind(verify)(golfie);
            golfie = golfie.os;
            option = oscard == golfie;
            zuuluu = undefined;
            if(option) { _fun00002_ip = 134; continue _fun00001 }
 128:
            zuuluu = golfie.family;
 134:
            michal = oscard != zuuluu;
 138:
            if(!michal) { _fun00002_ip = 199; continue _fun00001 }
 141:
            golfie = /^win/i;
            oscard = golfie.test;
            verify = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 1;
            option = option[zuuluu];
            zuuluu = undefined;
            zuuluu = verify.bind(zuuluu)(option);
            zuuluu = zuuluu.os;
            zuuluu = zuuluu.family;
            michal = oscard.bind(golfie)(zuuluu);
 199:
            if(!michal) { _fun00002_ip = 245; continue _fun00001 }
 202:
            zuuluu = entity.unshift;
            michal = {};
            report = _closure1_slot3;
            michal['id'] = report;
            michal['type'] = tangon;
            tangon = -1;
            michal['index'] = tangon;
            tangon = 'Default';
            michal['name'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 245:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    option = report.DEFAULT_DEVICE_ID;
    var _closure1_slot3 = option;
    report = report.DeviceTypes;
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/media-engine/native/Devices.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['sanitizeDevices'] = tangon;
    tangon = function() { // Original name: getAudioInputDevices
        entity = global;
        zuuluu = entity.Promise;
        entity = zuuluu.prototype;
        michal = Object.create(entity, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getVoiceEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getInputDevices;
            michal = function(argFoo) {
                zuuluu = _closure3_slot0;
                report = _closure1_slot5;
                entity = _closure1_slot4;
                tangon = entity.AUDIO_INPUT;
                michal = undefined;
                entity = argFoo;
                entity = report.bind(michal)(tangon, entity);
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['getAudioInputDevices'] = tangon;
    tangon = function() { // Original name: getAudioOutputDevices
        entity = global;
        zuuluu = entity.Promise;
        entity = zuuluu.prototype;
        michal = Object.create(entity, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getVoiceEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getOutputDevices;
            michal = function(argFoo) {
                zuuluu = _closure3_slot0;
                report = _closure1_slot5;
                entity = _closure1_slot4;
                tangon = entity.AUDIO_OUTPUT;
                michal = undefined;
                entity = argFoo;
                entity = report.bind(michal)(tangon, entity);
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['getAudioOutputDevices'] = tangon;
    michal = function() { // Original name: getVideoInputDevices
        entity = global;
        zuuluu = entity.Promise;
        entity = zuuluu.prototype;
        michal = Object.create(entity, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getVoiceEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getVideoInputDevices;
            michal = function(argFoo) {
                zuuluu = _closure3_slot0;
                report = _closure1_slot5;
                entity = _closure1_slot4;
                tangon = entity.VIDEO_INPUT;
                michal = undefined;
                entity = argFoo;
                entity = report.bind(michal)(tangon, entity);
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['getVideoInputDevices'] = michal;
    return entity;
})();