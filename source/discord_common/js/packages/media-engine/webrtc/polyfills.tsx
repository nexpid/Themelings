// discord_common/js/packages/media-engine/webrtc/polyfills.tsx
export default (function(argFoo, argBar, argBaz, _, __, ___, argPlugh) {
    _fun50908: for(var _fun50908_ip = 0; ; ) switch(_fun50908_ip) {
 0:
        zulu = argBar;
        mike = argPlugh;
        entity = global;
        oscar = entity.window;
        tango = entity.window;
        report = tango.AudioContext;
        tango = null;
        if(!(tango == report)) { _fun50908_ip = 46; continue _fun50908 }
 32:
        golf = entity.window;
        report = golf.webkitAudioContext;
 46:
        oscar['AudioContext'] = report;
        entity = entity.window;
        entity = entity.RTCPeerConnection;
        if(!(tango != entity)) { _fun50908_ip = 155; continue _fun50908 }
 68:
        entity = 0;
        report = mike[entity];
        entity = argBaz;
        tango = undefined;
        entity = entity.bind(tango)(report);
        report = entity.name;
        entity = 'Chrome';
        if(!(entity === report)) { _fun50908_ip = 155; continue _fun50908 }
 99:
        entity = 1;
        entity = mike[entity];
        tango = zulu.bind(tango)(entity);
        entity = tango.platformVersion;
        tango = entity.bind(tango)();
        entity = 52;
        if(!(tango < entity)) { _fun50908_ip = 155; continue _fun50908 }
 128:
        report = ['createOffer', 'createAnswer'];
        tango = report.forEach;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = global;
            tango = mike.RTCPeerConnection;
            tango = tango.prototype;
            tango = tango[zulu];
            var _closure2_slot0 = tango;
            mike = mike.RTCPeerConnection;
            mike = mike.prototype;
            entity = function(argFoo) {
                _fun50910: for(var _fun50910_ip = 0; ; ) switch(_fun50910_ip) {
 0:
                    options = this;
                    zulu = 0;
                    offset = 0;
                    mike = copyRestArgs(offset);
                    report = undefined;
                    var _closure3_slot1 = report;
                    var _closure3_slot0 = options;
                    tango = mike.length;
                    oscar = 1;
                    if(!(!(tango < oscar))) { _fun50910_ip = 79; continue _fun50910 }
 35:
                    tango = mike.length;
                    if(!(oscar === tango)) { _fun50910_ip = 59; continue _fun50910 }
 44:
                    tango = mike[zulu];
                    golf = 'object';
                    tango = typeof tango;
                    if(!(golf !== tango)) { _fun50910_ip = 79; continue _fun50910 }
 59:
                    golf = _closure2_slot0;
                    tango = golf.apply;
                    tango = tango.bind(golf)(options, mike);
                    return tango;
 79:
                    tango = mike.length;
                    report = undefined;
                    if(!(oscar === tango)) { _fun50910_ip = 94; continue _fun50910 }
 90:
                    report = mike[zulu];
 94:
                    _closure3_slot1 = report;
                    mike = null;
                    if(!(mike != report)) { _fun50910_ip = 210; continue _fun50910 }
 104:
                    mike = {};
                    zulu = {};
                    tango = report.offerToReceiveAudio;
                    if(tango) { _fun50910_ip = 119; continue _fun50910 }
 117:
                    tango = false;
 119:
                    zulu['OfferToReceiveAudio'] = tango;
                    tango = report.offerToReceiveVideo;
                    if(tango) { _fun50910_ip = 137; continue _fun50910 }
 135:
                    tango = false;
 137:
                    zulu['OfferToReceiveVideo'] = tango;
                    mike['mandatory'] = zulu;
                    tango = {};
                    zulu = report.voiceActivityDetection;
                    if(zulu) { _fun50910_ip = 162; continue _fun50910 }
 160:
                    zulu = false;
 162:
                    tango['VoiceActivityDetection'] = zulu;
                    zulu = new Array(2);
                    zulu[0] = tango;
                    tango = {};
                    report = report.iceRestart;
                    if(report) { _fun50910_ip = 190; continue _fun50910 }
 188:
                    report = false;
 190:
                    tango['IceRestart'] = report;
                    zulu[1] = tango;
                    mike['optional'] = zulu;
                    _closure3_slot1 = mike;
 210:
                    mike = global;
                    zulu = mike.Promise;
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    offset = function(argFoo, argBar) {
                        tango = _closure2_slot0;
                        zulu = tango.apply;
                        mike = _closure3_slot0;
                        entity = new Array(3);
                        oscar = argFoo;
                        entity[0] = oscar;
                        oscar = argBar;
                        entity[1] = oscar;
                        report = _closure3_slot1;
                        entity[2] = report;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    yankee = mike;
                    entity = new yankee[zulu](offset, verify);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                }
            };
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        };
        entity = tango.bind(report)(entity);
 155:
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.fileFinishedImporting;
        mike = '../discord_common/js/packages/media-engine/webrtc/polyfills.tsx';
        mike = zulu.bind(tango)(mike);
        return entity;
    }
})();