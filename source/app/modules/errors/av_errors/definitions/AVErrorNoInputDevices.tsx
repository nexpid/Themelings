// app/modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.voiceChannelId;
            golfie = entity.voiceState;
            zuuluu = _closure1_slot2;
            entity = zuuluu.getChannel;
            oscard = entity.bind(zuuluu)(tangon);
            report = null;
            tangon = report == oscard;
            entity = undefined;
            zuuluu = undefined;
            if(tangon) { _fun00002_ip = 55; continue _fun00001 }
 45:
            tangon = oscard.isGuildStageVoice;
            zuuluu = tangon.bind(oscard)();
 55:
            if(!zuuluu) { _fun00002_ip = 76; continue _fun00001 }
 58:
            option = report == golfie;
            tangon = undefined;
            if(option) { _fun00002_ip = 73; continue _fun00001 }
 67:
            tangon = golfie.suppress;
 73:
            zuuluu = tangon;
 76:
            tangon = global;
            option = tangon.Object;
            golfie = option.keys;
            verify = _closure1_slot3;
            tangon = verify.getInputDevices;
            tangon = tangon.bind(verify)();
            tangon = golfie.bind(option)(tangon);
            option = tangon.length;
            golfie = _closure1_slot4;
            tangon = golfie.getMediaSessionId;
            tangon = tangon.bind(golfie)();
            golfie = 0;
            if(!(golfie === option)) { _fun00002_ip = 221; continue _fun00001 }
 133:
            if(!(report != oscard)) { _fun00002_ip = 221; continue _fun00001 }
 137:
            if(!(report != tangon)) { _fun00002_ip = 221; continue _fun00001 }
 141:
            if(zuuluu) { _fun00002_ip = 221; continue _fun00001 }
 144:
            zuuluu = {};
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.AVError;
            michal = michal.NO_INPUT_DEVICES;
            zuuluu['type'] = michal;
            michal = 4;
            michal = report[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.getVoiceChannelErrorContext;
            offset = michal.bind(tangon)();
            yankee = zuuluu;
            michal = copyDataProperties(yankee, offset);
            michal = new Array(1);
            michal[0] = zuuluu;
            return michal;
 221:
            return entity;
        }
    };
    michal['getActiveErrors'] = golfie;
    tangon = function(argFoo) { // Original name: makeErrorContextKey
        entity = argFoo;
        zuuluu = entity.mediaSessionId;
        entity = global;
        entity = entity.HermesInternal;
        michal = entity.concat;
        entity = '';
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['makeErrorContextKey'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorNoInputDevicesDefinition'] = michal;
    return entity;
})();