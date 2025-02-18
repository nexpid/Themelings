// discord_common/js/packages/media-engine/webrtc/Devices.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golfie = argBar;
        zuuluu = argFre;
        option = argPlu;
        entity = function(argFoo) { // Original name: getDefaultDevice
            entity = {};
            michal = _closure1_slot1;
            entity['id'] = michal;
            michal = argFoo;
            entity['type'] = michal;
            michal = 0;
            entity['index'] = michal;
            michal = 'Default';
            entity['name'] = michal;
            return entity;
        };
        var _closure1_slot5 = entity;
        entity = function() { // Original name: getDefaultDevices
            tangon = _closure1_slot5;
            entity = _closure1_slot2;
            entity = entity.AUDIO_INPUT;
            zuuluu = undefined;
            report = tangon.bind(zuuluu)(entity);
            entity = new Array(3);
            entity[0] = report;
            report = _closure1_slot2;
            report = report.AUDIO_OUTPUT;
            report = tangon.bind(zuuluu)(report);
            entity[1] = report;
            michal = _closure1_slot2;
            michal = michal.VIDEO_INPUT;
            michal = tangon.bind(zuuluu)(michal);
            entity[2] = michal;
            return entity;
        };
        var _closure1_slot6 = entity;
        entity = function(argFoo, argBar) { // Original name: filterDevices
            zuuluu = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        var _closure1_slot7 = entity;
        entity = function() { // Original name: enumerateDevices
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure1_slot3;
                tangon = global;
                if(entity) { _fun00004_ip = 47; continue _fun00003 }
 14:
                oscard = tangon.Promise;
                entity = oscard.prototype;
                report = Object.create(entity, {constructor: {value: oscard}});
                golfie = function(argFoo) {
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    entity = global;
                    zuuluu = entity.setImmediate;
                    entity = undefined;
                    michal = function() {
                        zuuluu = _closure3_slot0;
                        entity = _closure1_slot6;
                        michal = undefined;
                        entity = entity.bind(michal)();
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                option = report;
                entity = new option[oscard](golfie, oscard);
                entity = entity instanceof Object ? entity : report;
                _fun00004_ip = 114; continue _fun00003;
 47:
                tangon = tangon.navigator;
                report = tangon.mediaDevices;
                tangon = report.enumerateDevices;
                oscard = tangon.bind(report)();
                report = oscard.then;
                tangon = function(argFoo) {
                    tangon = argFoo;
                    michal = 0;
                    var _closure3_slot0 = michal;
                    var _closure3_slot1 = michal;
                    var _closure3_slot2 = michal;
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            michal = entity.kind;
                            zuuluu = _closure1_slot2;
                            zuuluu = zuuluu.AUDIO_INPUT;
                            if(!(zuuluu !== michal)) { _fun00006_ip = 57; continue _fun00005 }
 25:
                            zuuluu = _closure1_slot2;
                            zuuluu = zuuluu.AUDIO_OUTPUT;
                            if(!(zuuluu !== michal)) { _fun00006_ip = 57; continue _fun00005 }
 39:
                            entity = _closure1_slot2;
                            entity = entity.VIDEO_INPUT;
                            if(!(entity !== michal)) { _fun00006_ip = 57; continue _fun00005 }
 53:
                            entity = false;
                            return entity;
 57:
                            entity = true;
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = zuuluu.kind;
                            michal = _closure1_slot2;
                            michal = michal.AUDIO_INPUT;
                            if(!(michal !== tangon)) { _fun00008_ip = 90; continue _fun00007 }
 25:
                            michal = _closure1_slot2;
                            michal = michal.AUDIO_OUTPUT;
                            if(!(michal !== tangon)) { _fun00008_ip = 68; continue _fun00007 }
 39:
                            entity = _closure1_slot2;
                            entity = entity.VIDEO_INPUT;
                            entity = _closure3_slot2;
                            oscard = parseFloat(entity);
                            entity = oscard + 1;
                            _closure3_slot2 = entity;
                            _fun00008_ip = 110; continue _fun00007;
 68:
                            entity = _closure3_slot1;
                            entity = parseFloat(entity);
                            michal = entity + 1;
                            _closure3_slot1 = michal;
                            oscard = entity;
                            _fun00008_ip = 110; continue _fun00007;
 90:
                            entity = _closure3_slot0;
                            entity = parseFloat(entity);
                            michal = entity + 1;
                            _closure3_slot0 = michal;
                            oscard = entity;
 110:
                            entity = {};
                            michal = zuuluu.deviceId;
                            entity['id'] = michal;
                            michal = zuuluu.kind;
                            entity['type'] = michal;
                            entity['index'] = oscard;
                            tangon = zuuluu.label;
                            michal = null;
                            if(!(michal != tangon)) { _fun00008_ip = 159; continue _fun00007 }
 146:
                            tangon = zuuluu.label;
                            michal = '';
                            if(!(michal === tangon)) { _fun00008_ip = 195; continue _fun00007 }
 159:
                            michal = 'Default';
                            tangon = 0;
                            if(!(tangon !== oscard)) { _fun00008_ip = 193; continue _fun00007 }
 169:
                            tangon = global;
                            tangon = tangon.HermesInternal;
                            report = tangon.concat;
                            tangon = 'Device ';
                            michal = report.bind(tangon)(oscard);
 193:
                            _fun00008_ip = 200; continue _fun00007;
 195:
                            michal = zuuluu.label;
 200:
                            entity['name'] = michal;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                report = report.bind(oscard)(tangon);
                tangon = report.then;
                zuuluu = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        report = argFoo;
                        michal = _closure1_slot4;
                        entity = report;
                        if(michal) { _fun00010_ip = 67; continue _fun00009 }
 16:
                        tangon = report.filter;
                        michal = function(argFoo) {
                            entity = argFoo;
                            michal = entity.type;
                            entity = _closure1_slot2;
                            entity = entity.AUDIO_OUTPUT;
                            entity = michal !== entity;
                            return entity;
                        };
                        michal = tangon.bind(report)(michal);
                        tangon = michal.push;
                        oscard = _closure1_slot5;
                        zuuluu = _closure1_slot2;
                        report = zuuluu.AUDIO_OUTPUT;
                        zuuluu = undefined;
                        zuuluu = oscard.bind(zuuluu)(report);
                        zuuluu = tangon.bind(michal)(zuuluu);
                        entity = michal;
 67:
                        return entity;
                    }
                };
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.catch;
                michal = _closure1_slot6;
                entity = zuuluu.bind(tangon)(michal);
 114:
                return entity;
            }
        };
        var _closure1_slot8 = entity;
        entity = function() { // Original name: _getAudioInputDevices
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot0;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00012_ip = 56; continue _fun00011 }
 7:
                        report = _closure1_slot7;
                        michal = _closure1_slot8;
                        tangon = undefined;
                        michal = michal.bind(tangon)();
                        SaveGenerator(address=28);
 26:
                        return michal;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscard) { _fun00012_ip = 53; continue _fun00011 }
 34:
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu.AUDIO_INPUT;
                        zuuluu = report.bind(tangon)(michal, zuuluu);
                        return zuuluu;
 53:
                        return michal;
 56:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot9 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot9 = entity;
        entity = function() { // Original name: _getAudioOutputDevices
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot0;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00014_ip = 56; continue _fun00013 }
 7:
                        report = _closure1_slot7;
                        michal = _closure1_slot8;
                        tangon = undefined;
                        michal = michal.bind(tangon)();
                        SaveGenerator(address=28);
 26:
                        return michal;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscard) { _fun00014_ip = 53; continue _fun00013 }
 34:
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu.AUDIO_OUTPUT;
                        zuuluu = report.bind(tangon)(michal, zuuluu);
                        return zuuluu;
 53:
                        return michal;
 56:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot10 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot10 = entity;
        entity = function() { // Original name: _getVideoInputDevices
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot0;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00016_ip = 56; continue _fun00015 }
 7:
                        report = _closure1_slot7;
                        michal = _closure1_slot8;
                        tangon = undefined;
                        michal = michal.bind(tangon)();
                        SaveGenerator(address=28);
 26:
                        return michal;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscard) { _fun00016_ip = 53; continue _fun00015 }
 34:
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu.VIDEO_INPUT;
                        zuuluu = report.bind(tangon)(michal, zuuluu);
                        return zuuluu;
 53:
                        return michal;
 56:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot11 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot11 = entity;
        entity = function() { // Original name: _getDevices
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot0;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00018_ip = 104; continue _fun00017 }
 7:
                        michal = _closure1_slot8;
                        oscard = undefined;
                        michal = michal.bind(oscard)();
                        SaveGenerator(address=24);
 22:
                        return michal;
 24:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00018_ip = 101; continue _fun00017 }
 30:
                        report = _closure1_slot7;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu.AUDIO_INPUT;
                        golfie = report.bind(oscard)(michal, zuuluu);
                        zuuluu = new Array(3);
                        zuuluu[0] = golfie;
                        golfie = _closure1_slot2;
                        golfie = golfie.AUDIO_OUTPUT;
                        golfie = report.bind(oscard)(michal, golfie);
                        zuuluu[1] = golfie;
                        tangon = _closure1_slot2;
                        tangon = tangon.VIDEO_INPUT;
                        tangon = report.bind(oscard)(michal, tangon);
                        zuuluu[2] = tangon;
                        return zuuluu;
 101:
                        return michal;
 104:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot12 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot12 = entity;
        oscard = global;
        verify = oscard.Object;
        report = verify.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(verify)(zuuluu, entity, tangon);
        entity = 0;
        report = option[entity];
        tangon = argBaz;
        entity = undefined;
        tangon = tangon.bind(entity)(report);
        var _closure1_slot0 = tangon;
        tangon = 1;
        tangon = option[tangon];
        tangon = golfie.bind(entity)(tangon);
        report = tangon.DEFAULT_DEVICE_ID;
        var _closure1_slot1 = report;
        tangon = tangon.DeviceTypes;
        var _closure1_slot2 = tangon;
        tangon = oscard.navigator;
        tangon = tangon.mediaDevices;
        verify = null;
        report = verify != tangon;
        if(!report) { _fun00002_ip = 210; continue _fun00001 }
 188:
        tangon = oscard.navigator;
        tangon = tangon.mediaDevices;
        tangon = tangon.enumerateDevices;
        report = verify != tangon;
 210:
        var _closure1_slot3 = report;
        tangon = report;
        if(!tangon) { _fun00002_ip = 241; continue _fun00001 }
 220:
        oscard = oscard.HTMLAudioElement;
        verify = oscard.prototype;
        oscard = 'setSinkId';
        tangon = oscard in verify;
 241:
        var _closure1_slot4 = tangon;
        oscard = 2;
        oscard = option[oscard];
        option = golfie.bind(entity)(oscard);
        golfie = option.fileFinishedImporting;
        oscard = '../discord_common/js/packages/media-engine/webrtc/Devices.tsx';
        oscard = golfie.bind(option)(oscard);
        zuuluu['CAN_SET_DEVICES'] = report;
        zuuluu['CAN_SET_OUTPUT_DEVICES'] = tangon;
        tangon = function() { // Original name: getAudioInputDevices
            entity = undefined;
            tangon = _closure1_slot9;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['getAudioInputDevices'] = tangon;
        tangon = function() { // Original name: getAudioOutputDevices
            entity = undefined;
            tangon = _closure1_slot10;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['getAudioOutputDevices'] = tangon;
        tangon = function() { // Original name: getVideoInputDevices
            entity = undefined;
            tangon = _closure1_slot11;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['getVideoInputDevices'] = tangon;
        michal = function() { // Original name: getDevices
            entity = undefined;
            tangon = _closure1_slot12;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['getDevices'] = michal;
        return entity;
    }
})();