// app/modules/go_live/utils/StreamKeyUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StreamTypes;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/go_live/utils/StreamKeyUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isStreamKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00002_ip = 63; continue _fun00001 }
 12:
            tangon = report.startsWith;
            michal = _closure1_slot1;
            michal = michal.GUILD;
            michal = tangon.bind(report)(michal);
            if(michal) { _fun00002_ip = 60; continue _fun00001 }
 39:
            tangon = report.startsWith;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu.CALL;
            michal = tangon.bind(report)(zuuluu);
 60:
            entity = michal;
 63:
            return entity;
        }
    };
    zuuluu['isStreamKey'] = tangon;
    tangon = function(argFoo) { // Original name: decodeStreamKey
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.split;
            entity = ':';
            report = michal.bind(zuuluu)(entity);
            michal = 0;
            golfie = report[michal];
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== golfie)) { _fun00004_ip = 157; continue _fun00003 }
 40:
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu.CALL;
            if(!(zuuluu !== golfie)) { _fun00004_ip = 106; continue _fun00003 }
 54:
            zuuluu = global;
            oscard = zuuluu.Error;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = 'Unknown stream type ';
            verify = tangon.bind(zuuluu)(golfie);
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            offset = tangon;
            zuuluu = new offset[oscard](verify, option);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            throw zuuluu;
 106:
            oscard = _closure1_slot0;
            tangon = undefined;
            zuuluu = 3;
            oscard = oscard.bind(tangon)(report, zuuluu);
            zuuluu = {};
            tangon = oscard[michal];
            zuuluu['streamType'] = tangon;
            tangon = 1;
            tangon = oscard[tangon];
            zuuluu['channelId'] = tangon;
            tangon = 2;
            tangon = oscard[tangon];
            zuuluu['ownerId'] = tangon;
            return zuuluu;
 157:
            tangon = _closure1_slot0;
            zuuluu = undefined;
            entity = 4;
            zuuluu = tangon.bind(zuuluu)(report, entity);
            entity = {};
            michal = zuuluu[michal];
            entity['streamType'] = michal;
            michal = 1;
            michal = zuuluu[michal];
            entity['guildId'] = michal;
            michal = 2;
            michal = zuuluu[michal];
            entity['channelId'] = michal;
            michal = 3;
            michal = zuuluu[michal];
            entity['ownerId'] = michal;
            return entity;
        }
    };
    zuuluu['decodeStreamKey'] = tangon;
    michal = function(argFoo) { // Original name: encodeStreamKey
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.streamType;
            tangon = entity.guildId;
            michal = entity.channelId;
            entity = entity.ownerId;
            oscard = _closure1_slot1;
            oscard = oscard.GUILD;
            if(!(oscard !== report)) { _fun00006_ip = 140; continue _fun00005 }
 42:
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu.CALL;
            if(!(zuuluu !== report)) { _fun00006_ip = 108; continue _fun00005 }
 56:
            zuuluu = global;
            golfie = zuuluu.Error;
            zuuluu = zuuluu.HermesInternal;
            oscard = zuuluu.concat;
            zuuluu = 'Unknown stream type ';
            option = oscard.bind(zuuluu)(report);
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            verify = oscard;
            zuuluu = new verify[golfie](option, golfie);
            zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
            throw zuuluu;
 108:
            golfie = new Array(3);
            golfie[0] = report;
            golfie[1] = michal;
            golfie[2] = entity;
            oscard = golfie.join;
            zuuluu = ':';
            zuuluu = oscard.bind(golfie)(zuuluu);
            return zuuluu;
 140:
            zuuluu = new Array(4);
            zuuluu[0] = report;
            zuuluu[1] = tangon;
            zuuluu[2] = michal;
            zuuluu[3] = entity;
            michal = zuuluu.join;
            entity = ':';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['encodeStreamKey'] = michal;
    return entity;
})();