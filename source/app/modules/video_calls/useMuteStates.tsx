// app/modules/video_calls/useMuteStates.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: getMuteStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.channel;
            romeon = entity.authenticationStore;
            zuuluu = undefined;
            if(!(romeon === zuuluu)) { _fun00002_ip = 27; continue _fun00001 }
 20:
            romeon = _closure1_slot3;
 27:
            yankee = entity.voiceStateStore;
            if(!(yankee === zuuluu)) { _fun00002_ip = 44; continue _fun00001 }
 37:
            yankee = _closure1_slot6;
 44:
            oscard = entity.mediaEngineStore;
            if(!(oscard === zuuluu)) { _fun00002_ip = 61; continue _fun00001 }
 54:
            oscard = _closure1_slot4;
 61:
            option = entity.permissionStore;
            if(!(option === zuuluu)) { _fun00002_ip = 78; continue _fun00001 }
 71:
            option = _closure1_slot5;
 78:
            golfie = entity.impersonateStore;
            if(!(golfie === zuuluu)) { _fun00002_ip = 95; continue _fun00001 }
 88:
            golfie = _closure1_slot2;
 95:
            michal = null;
            entity = michal != verify;
            tangon = null;
            if(!entity) { _fun00002_ip = 138; continue _fun00001 }
 106:
            offset = yankee.getVoiceState;
            entity = verify.getGuildId;
            report = entity.bind(verify)();
            entity = romeon.getId;
            entity = entity.bind(romeon)();
            tangon = offset.bind(yankee)(report, entity);
 138:
            entity = oscard.isSelfMute;
            report = entity.bind(oscard)();
            if(report) { _fun00002_ip = 161; continue _fun00001 }
 151:
            entity = oscard.isSelfMutedTemporarily;
            report = entity.bind(oscard)();
 161:
            entity = michal == verify;
            oscard = undefined;
            if(entity) { _fun00002_ip = 180; continue _fun00001 }
 170:
            entity = verify.getGuildId;
            oscard = entity.bind(verify)();
 180:
            entity = golfie.isViewingRoles;
            oscard = entity.bind(golfie)(oscard);
            if(!oscard) { _fun00002_ip = 222; continue _fun00001 }
 194:
            golfie = option.can;
            entity = _closure1_slot7;
            entity = entity.SPEAK;
            entity = golfie.bind(option)(entity, verify);
            oscard = !entity;
 222:
            entity = {};
            entity['selfMute'] = report;
            golfie = michal == tangon;
            report = undefined;
            if(golfie) { _fun00002_ip = 244; continue _fun00001 }
 238:
            report = tangon.suppress;
 244:
            if(report) { _fun00002_ip = 250; continue _fun00001 }
 247:
            report = oscard;
 250:
            entity['suppress'] = report;
            report = michal == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 270; continue _fun00001 }
 264:
            zuuluu = tangon.mute;
 270:
            michal = michal != zuuluu;
            if(!michal) { _fun00002_ip = 280; continue _fun00001 }
 277:
            michal = zuuluu;
 280:
            entity['mute'] = michal;
            return entity;
        }
    };
    var _closure1_slot8 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot7 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/video_calls/useMuteStates.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useMuteStates
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 6;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        oscard = _closure1_slot3;
        michal = new Array(5);
        michal[0] = oscard;
        oscard = _closure1_slot6;
        michal[1] = oscard;
        oscard = _closure1_slot4;
        michal[2] = oscard;
        oscard = _closure1_slot5;
        michal[3] = oscard;
        report = _closure1_slot2;
        michal[4] = report;
        entity = function() {
            zuuluu = _closure1_slot8;
            michal = {};
            tangon = _closure2_slot0;
            michal['channel'] = tangon;
            tangon = _closure1_slot3;
            michal['authenticationStore'] = tangon;
            tangon = _closure1_slot6;
            michal['voiceStateStore'] = tangon;
            tangon = _closure1_slot4;
            michal['mediaEngineStore'] = tangon;
            tangon = _closure1_slot5;
            michal['permissionStore'] = tangon;
            entity = _closure1_slot2;
            michal['impersonateStore'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getMuteStates'] = michal;
    return entity;
})();