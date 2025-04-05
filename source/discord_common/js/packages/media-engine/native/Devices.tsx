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
                    option = argBar;
                    golfie = michal.guid;
                    report = michal.guid;
                    sizing = michal.name;
                    oscard = michal.name;
                    entity = michal.index;
                    tangon = michal.facing;
                    zuuluu = michal.hardwareId;
                    michal = michal.containerId;
                    romeon = _closure2_slot0;
                    offset = _closure1_slot4;
                    offset = offset.VIDEO_INPUT;
                    if(!(romeon === offset)) { _fun00004_ip = 102; continue _fun00003 }
 75:
                    romeon = /^front/i;
                    offset = romeon.test;
                    offset = offset.bind(romeon)(sizing);
                    if(offset) { _fun00004_ip = 188; continue _fun00003 }
 102:
                    romeon = /^default/;
                    offset = romeon.test;
                    offset = offset.bind(romeon)(sizing);
                    if(offset) { _fun00004_ip = 157; continue _fun00003 }
 129:
                    romeon = null;
                    offset = sizing;
                    if(!(romeon != golfie)) { _fun00004_ip = 152; continue _fun00003 }
 138:
                    romeon = '';
                    offset = sizing;
                    if(!(romeon !== golfie)) { _fun00004_ip = 152; continue _fun00003 }
 149:
                    offset = golfie;
 152:
                    golfie = sizing;
                    _fun00004_ip = 196; continue _fun00003;
 157:
                    romeon = true;
                    _closure2_slot1 = romeon;
                    offset = _closure1_slot3;
                    kiloes = sizing.replace;
                    backup = 'default';
                    romeon = 'Default';
                    golfie = kiloes.bind(sizing)(backup, romeon);
                    _fun00004_ip = 196; continue _fun00003;
 188:
                    offset = _closure1_slot3;
                    golfie = 'Default';
 196:
                    yankee = null;
                    if(!(yankee != entity)) { _fun00004_ip = 205; continue _fun00003 }
 202:
                    option = entity;
 205:
                    entity = {};
                    entity['id'] = offset;
                    verify = _closure2_slot0;
                    entity['type'] = verify;
                    entity['index'] = option;
                    entity['name'] = golfie;
                    entity['originalName'] = oscard;
                    entity['originalId'] = report;
                    entity['facing'] = tangon;
                    entity['hardwareId'] = zuuluu;
                    entity['containerId'] = michal;
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