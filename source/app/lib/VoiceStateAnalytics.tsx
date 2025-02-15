// app/lib/VoiceStateAnalytics.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SpeakingFlags;
    var _closure1_slot4 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo, argBar) { // Original name: VoiceStateAnalytics
            tango = this;
            report = _closure1_slot0;
            zulu = _closure2_slot0;
            entity = undefined;
            zulu = report.bind(entity)(tango, zulu);
            zulu = 1;
            tango['maxVoiceStateCount'] = zulu;
            mike = _closure1_slot4;
            mike = mike.NONE;
            tango['speaking'] = mike;
            mike = 0;
            tango['maxListenerCount'] = mike;
            tango['maxSpeakerCount'] = mike;
            mike = argFoo;
            tango['userId'] = mike;
            zulu = tango.setChannelId;
            mike = argBar;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'updateVoiceStates';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun105421: for(var _fun105421_ip = 0; ; ) switch(_fun105421_ip) {
 0:
                tango = argFoo;
                oscar = argBar;
                mike = this;
                entity = mike.channelId;
                if(!(oscar !== entity)) { _fun105421_ip = 95; continue _fun105421 }
 18:
                zulu = null;
                entity = zulu == oscar;
                if(!entity) { _fun105421_ip = 37; continue _fun105421 }
 27:
                report = mike.totalSpeakers;
                entity = tango in report;
 37:
                if(!entity) { _fun105421_ip = 63; continue _fun105421 }
 40:
                report = mike.totalSpeakers;
                entity = _closure1_slot4;
                entity = entity.NONE;
                report[tango] = entity;
 63:
                entity = mike.userId;
                entity = tango === entity;
                if(!entity) { _fun105421_ip = 79; continue _fun105421 }
 75:
                entity = zulu != oscar;
 79:
                if(!entity) { _fun105421_ip = 160; continue _fun105421 }
 82:
                entity = mike.setChannelId;
                entity = entity.bind(mike)(oscar);
                _fun105421_ip = 160; continue _fun105421;
 95:
                zulu = mike.totalParticipants;
                entity = zulu.add;
                entity = entity.bind(zulu)(tango);
                entity = global;
                report = entity.Math;
                tango = report.max;
                zulu = _closure1_slot3;
                entity = zulu.countVoiceStatesForChannel;
                zulu = entity.bind(zulu)(oscar);
                entity = mike.maxVoiceStateCount;
                entity = tango.bind(report)(zulu, entity);
                mike['maxVoiceStateCount'] = entity;
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'getStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = {};
            zulu = mike.maxVoiceStateCount;
            entity['max_voice_state_count'] = zulu;
            zulu = mike.totalParticipants;
            zulu = zulu.size;
            entity['total_voice_state_count'] = zulu;
            zulu = mike.maxListenerCount;
            entity['max_listener_count'] = zulu;
            zulu = mike.totalListeners;
            zulu = zulu.size;
            entity['total_listener_count'] = zulu;
            zulu = mike.maxSpeakerCount;
            entity['max_speaker_count'] = zulu;
            zulu = global;
            tango = zulu.Object;
            zulu = tango.keys;
            mike = mike.totalSpeakers;
            mike = zulu.bind(tango)(mike);
            mike = mike.length;
            entity['total_speaker_count'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'setSpeaking';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun105423: for(var _fun105423_ip = 0; ; ) switch(_fun105423_ip) {
 0:
                oscar = argFoo;
                mike = argBar;
                entity = this;
                var _closure3_slot0 = entity;
                tango = _closure1_slot4;
                tango = tango.NONE;
                if(!(mike === tango)) { _fun105423_ip = 73; continue _fun105423 }
 32:
                tango = entity.totalSpeakers;
                tango = oscar in tango;
                if(!tango) { _fun105423_ip = 203; continue _fun105423 }
 48:
                golf = entity.totalSpeakers;
                tango = _closure1_slot4;
                tango = tango.NONE;
                golf[oscar] = tango;
                _fun105423_ip = 203; continue _fun105423;
 73:
                options = _closure1_slot2;
                golf = options.getVoiceStateForChannel;
                tango = entity.channelId;
                tango = golf.bind(options)(tango, oscar);
                golf = null;
                if(!(golf != tango)) { _fun105423_ip = 203; continue _fun105423 }
 100:
                golf = tango.selfMute;
                if(golf) { _fun105423_ip = 203; continue _fun105423 }
 109:
                tango = tango.mute;
                if(tango) { _fun105423_ip = 203; continue _fun105423 }
 118:
                tango = entity.totalSpeakers;
                tango[oscar] = mike;
                tango = global;
                verify = tango.Object;
                options = verify.values;
                golf = entity.totalSpeakers;
                verify = options.bind(verify)(golf);
                options = verify.filter;
                golf = function(argFoo) {
                    entity = _closure1_slot4;
                    mike = entity.NONE;
                    entity = argFoo;
                    entity = entity !== mike;
                    return entity;
                };
                golf = options.bind(verify)(golf);
                verify = golf.length;
                options = tango.Math;
                golf = options.max;
                tango = entity.maxSpeakerCount;
                tango = golf.bind(options)(tango, verify);
                entity['maxSpeakerCount'] = tango;
 203:
                tango = entity.userId;
                if(!(tango === oscar)) { _fun105423_ip = 354; continue _fun105423 }
 215:
                tango = entity.speaking;
                if(!(mike !== tango)) { _fun105423_ip = 358; continue _fun105423 }
 228:
                tango = _closure1_slot4;
                tango = tango.NONE;
                if(!(mike !== tango)) { _fun105423_ip = 348; continue _fun105423 }
 242:
                tango = global;
                golf = tango.Object;
                oscar = golf.values;
                verify = _closure1_slot2;
                options = verify.getVoiceStatesForChannel;
                zulu = entity.channelId;
                zulu = options.bind(verify)(zulu);
                golf = oscar.bind(golf)(zulu);
                oscar = golf.filter;
                zulu = function(argFoo) {
                    _fun105425: for(var _fun105425_ip = 0; ; ) switch(_fun105425_ip) {
 0:
                        mike = argFoo;
                        entity = mike.selfDeaf;
                        entity = !entity;
                        if(!entity) { _fun105425_ip = 24; continue _fun105425 }
 15:
                        mike = mike.deaf;
                        entity = !mike;
 24:
                        return entity;
                    }
                };
                zulu = oscar.bind(golf)(zulu);
                oscar = zulu.forEach;
                report = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.totalListeners;
                    mike = zulu.add;
                    entity = argFoo;
                    entity = entity.userId;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                report = oscar.bind(zulu)(report);
                oscar = tango.Math;
                report = oscar.max;
                tango = zulu.length;
                zulu = entity.maxListenerCount;
                zulu = report.bind(oscar)(tango, zulu);
                entity['maxListenerCount'] = zulu;
 348:
                entity['speaking'] = mike;
 354:
                entity = undefined;
                return entity;
 358:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'setChannelId';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun105427: for(var _fun105427_ip = 0; ; ) switch(_fun105427_ip) {
 0:
                entity = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike.channelId;
                if(!(entity !== zulu)) { _fun105427_ip = 217; continue _fun105427 }
 24:
                mike['channelId'] = entity;
                zulu = global;
                oscar = zulu.Set;
                tango = mike.userId;
                entity = new Array(1);
                entity[0] = tango;
                tango = oscar.prototype;
                tango = Object.create(tango, {constructor: {value: oscar}});
                yankee = tango;
                offset = entity;
                entity = new yankee[oscar](offset, verify);
                entity = entity instanceof Object ? entity : tango;
                mike['totalParticipants'] = entity;
                golf = zulu.Object;
                oscar = golf.keys;
                verify = _closure1_slot2;
                options = verify.getVoiceStatesForChannel;
                tango = mike.channelId;
                tango = options.bind(verify)(tango);
                tango = oscar.bind(golf)(tango);
                oscar = tango.forEach;
                report = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.totalParticipants;
                    mike = zulu.add;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                report = oscar.bind(tango)(report);
                tango = tango.length;
                mike['maxVoiceStateCount'] = tango;
                entity = _closure1_slot4;
                entity = entity.NONE;
                mike['speaking'] = entity;
                entity = 0;
                mike['maxListenerCount'] = entity;
                zulu = zulu.Set;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                yankee = tango;
                zulu = new yankee[zulu](offset);
                zulu = zulu instanceof Object ? zulu : tango;
                mike['totalListeners'] = zulu;
                mike['maxSpeakerCount'] = entity;
                entity = {};
                mike['totalSpeakers'] = entity;
 217:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/VoiceStateAnalytics.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();