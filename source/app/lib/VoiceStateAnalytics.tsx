// app/lib/VoiceStateAnalytics.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SpeakingFlags;
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo, argBar) { // Original name: VoiceStateAnalytics
            tangon = this;
            report = _closure1_slot0;
            zuuluu = _closure2_slot0;
            entity = undefined;
            zuuluu = report.bind(entity)(tangon, zuuluu);
            zuuluu = 1;
            tangon['maxVoiceStateCount'] = zuuluu;
            michal = _closure1_slot4;
            michal = michal.NONE;
            tangon['speaking'] = michal;
            michal = 0;
            tangon['maxListenerCount'] = michal;
            tangon['maxSpeakerCount'] = michal;
            michal = argFoo;
            tangon['userId'] = michal;
            zuuluu = tangon.setChannelId;
            michal = argBar;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'updateVoiceStates';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                oscard = argBar;
                michal = this;
                entity = michal.channelId;
                if(!(oscard !== entity)) { _fun00002_ip = 95; continue _fun00001 }
 18:
                zuuluu = null;
                entity = zuuluu == oscard;
                if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 27:
                report = michal.totalSpeakers;
                entity = tangon in report;
 37:
                if(!entity) { _fun00002_ip = 63; continue _fun00001 }
 40:
                report = michal.totalSpeakers;
                entity = _closure1_slot4;
                entity = entity.NONE;
                report[tangon] = entity;
 63:
                entity = michal.userId;
                entity = tangon === entity;
                if(!entity) { _fun00002_ip = 79; continue _fun00001 }
 75:
                entity = zuuluu != oscard;
 79:
                if(!entity) { _fun00002_ip = 160; continue _fun00001 }
 82:
                entity = michal.setChannelId;
                entity = entity.bind(michal)(oscard);
                _fun00002_ip = 160; continue _fun00001;
 95:
                zuuluu = michal.totalParticipants;
                entity = zuuluu.add;
                entity = entity.bind(zuuluu)(tangon);
                entity = global;
                report = entity.Math;
                tangon = report.max;
                zuuluu = _closure1_slot3;
                entity = zuuluu.countVoiceStatesForChannel;
                zuuluu = entity.bind(zuuluu)(oscard);
                entity = michal.maxVoiceStateCount;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['maxVoiceStateCount'] = entity;
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'getStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = {};
            zuuluu = michal.maxVoiceStateCount;
            entity['max_voice_state_count'] = zuuluu;
            zuuluu = michal.totalParticipants;
            zuuluu = zuuluu.size;
            entity['total_voice_state_count'] = zuuluu;
            zuuluu = michal.maxListenerCount;
            entity['max_listener_count'] = zuuluu;
            zuuluu = michal.totalListeners;
            zuuluu = zuuluu.size;
            entity['total_listener_count'] = zuuluu;
            zuuluu = michal.maxSpeakerCount;
            entity['max_speaker_count'] = zuuluu;
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.keys;
            michal = michal.totalSpeakers;
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.length;
            entity['total_speaker_count'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'setSpeaking';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = argFoo;
                michal = argBar;
                entity = this;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot4;
                tangon = tangon.NONE;
                if(!(michal === tangon)) { _fun00004_ip = 73; continue _fun00003 }
 32:
                tangon = entity.totalSpeakers;
                tangon = oscard in tangon;
                if(!tangon) { _fun00004_ip = 203; continue _fun00003 }
 48:
                golfie = entity.totalSpeakers;
                tangon = _closure1_slot4;
                tangon = tangon.NONE;
                golfie[oscard] = tangon;
                _fun00004_ip = 203; continue _fun00003;
 73:
                option = _closure1_slot2;
                golfie = option.getVoiceStateForChannel;
                tangon = entity.channelId;
                tangon = golfie.bind(option)(tangon, oscard);
                golfie = null;
                if(!(golfie != tangon)) { _fun00004_ip = 203; continue _fun00003 }
 100:
                golfie = tangon.selfMute;
                if(golfie) { _fun00004_ip = 203; continue _fun00003 }
 109:
                tangon = tangon.mute;
                if(tangon) { _fun00004_ip = 203; continue _fun00003 }
 118:
                tangon = entity.totalSpeakers;
                tangon[oscard] = michal;
                tangon = global;
                verify = tangon.Object;
                option = verify.values;
                golfie = entity.totalSpeakers;
                verify = option.bind(verify)(golfie);
                option = verify.filter;
                golfie = function(argFoo) {
                    entity = _closure1_slot4;
                    michal = entity.NONE;
                    entity = argFoo;
                    entity = entity !== michal;
                    return entity;
                };
                golfie = option.bind(verify)(golfie);
                verify = golfie.length;
                option = tangon.Math;
                golfie = option.max;
                tangon = entity.maxSpeakerCount;
                tangon = golfie.bind(option)(tangon, verify);
                entity['maxSpeakerCount'] = tangon;
 203:
                tangon = entity.userId;
                if(!(tangon === oscard)) { _fun00004_ip = 354; continue _fun00003 }
 215:
                tangon = entity.speaking;
                if(!(michal !== tangon)) { _fun00004_ip = 358; continue _fun00003 }
 228:
                tangon = _closure1_slot4;
                tangon = tangon.NONE;
                if(!(michal !== tangon)) { _fun00004_ip = 348; continue _fun00003 }
 242:
                tangon = global;
                golfie = tangon.Object;
                oscard = golfie.values;
                verify = _closure1_slot2;
                option = verify.getVoiceStatesForChannel;
                zuuluu = entity.channelId;
                zuuluu = option.bind(verify)(zuuluu);
                golfie = oscard.bind(golfie)(zuuluu);
                oscard = golfie.filter;
                zuuluu = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        entity = michal.selfDeaf;
                        entity = !entity;
                        if(!entity) { _fun00006_ip = 24; continue _fun00005 }
 15:
                        michal = michal.deaf;
                        entity = !michal;
 24:
                        return entity;
                    }
                };
                zuuluu = oscard.bind(golfie)(zuuluu);
                oscard = zuuluu.forEach;
                report = function(argFoo) {
                    entity = _closure3_slot0;
                    zuuluu = entity.totalListeners;
                    michal = zuuluu.add;
                    entity = argFoo;
                    entity = entity.userId;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                report = oscard.bind(zuuluu)(report);
                oscard = tangon.Math;
                report = oscard.max;
                tangon = zuuluu.length;
                zuuluu = entity.maxListenerCount;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                entity['maxListenerCount'] = zuuluu;
 348:
                entity['speaking'] = michal;
 354:
                entity = undefined;
                return entity;
 358:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'setChannelId';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = michal.channelId;
                if(!(entity !== zuuluu)) { _fun00008_ip = 217; continue _fun00007 }
 24:
                michal['channelId'] = entity;
                zuuluu = global;
                oscard = zuuluu.Set;
                tangon = michal.userId;
                entity = new Array(1);
                entity[0] = tangon;
                tangon = oscard.prototype;
                tangon = Object.create(tangon, {constructor: {value: oscard}});
                yankee = tangon;
                offset = entity;
                entity = new yankee[oscard](offset, verify);
                entity = entity instanceof Object ? entity : tangon;
                michal['totalParticipants'] = entity;
                golfie = zuuluu.Object;
                oscard = golfie.keys;
                verify = _closure1_slot2;
                option = verify.getVoiceStatesForChannel;
                tangon = michal.channelId;
                tangon = option.bind(verify)(tangon);
                tangon = oscard.bind(golfie)(tangon);
                oscard = tangon.forEach;
                report = function(argFoo) {
                    entity = _closure3_slot0;
                    zuuluu = entity.totalParticipants;
                    michal = zuuluu.add;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                report = oscard.bind(tangon)(report);
                tangon = tangon.length;
                michal['maxVoiceStateCount'] = tangon;
                entity = _closure1_slot4;
                entity = entity.NONE;
                michal['speaking'] = entity;
                entity = 0;
                michal['maxListenerCount'] = entity;
                zuuluu = zuuluu.Set;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                yankee = tangon;
                zuuluu = new yankee[zuuluu](offset);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                michal['totalListeners'] = zuuluu;
                michal['maxSpeakerCount'] = entity;
                entity = {};
                michal['totalSpeakers'] = entity;
 217:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/VoiceStateAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();