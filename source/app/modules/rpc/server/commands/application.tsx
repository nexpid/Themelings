// app/modules/rpc/server/commands/application.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RPC_LOCAL_SCOPE;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.ApplicationFlags;
    var _closure1_slot6 = tangon;
    tangon = michal.Endpoints;
    var _closure1_slot7 = tangon;
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot8 = michal;
    michal = {};
    offset = tangon.SEND_ANALYTICS_EVENT;
    golfie = {};
    yankee = function(argFoo) { // Original name: validation
        oscard = argFoo;
        golfie = _closure1_slot1;
        option = _closure1_slot2;
        tangon = 5;
        entity = option[tangon];
        report = undefined;
        entity = golfie.bind(report)(entity);
        michal = entity.bind(report)(oscard);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        verify = oscard.string;
        offset = verify.bind(oscard)();
        verify = offset.required;
        verify = verify.bind(offset)();
        entity['event_name'] = verify;
        tangon = option[tangon];
        tangon = golfie.bind(report)(tangon);
        report = tangon.bind(report)(oscard);
        tangon = report.required;
        tangon = tangon.bind(report)();
        entity['event_properties'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.socket;
            entity = entity.args;
            oscard = entity.event_name;
            golfie = entity.event_properties;
            option = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 6;
            verify = report[zuuluu];
            tangon = undefined;
            yankee = option.bind(tangon)(verify);
            offset = yankee.validatePostMessageTransport;
            verify = michal.transport;
            verify = offset.bind(yankee)(verify);
            zuuluu = report[zuuluu];
            verify = option.bind(tangon)(zuuluu);
            option = verify.validateApplication;
            zuuluu = michal.application;
            zuuluu = option.bind(verify)(zuuluu);
            michal = michal.application;
            offset = michal.id;
            zuuluu = _closure1_slot1;
            michal = 7;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            verify = michal.bind(tangon)();
            michal = null;
            zuuluu = michal == verify;
            report = undefined;
            if(zuuluu) { _fun00002_ip = 145; continue _fun00001 }
 135:
            zuuluu = verify.getGuildId;
            report = zuuluu.bind(verify)();
 145:
            if(!(michal != verify)) { _fun00002_ip = 440; continue _fun00001 }
 152:
            option = _closure1_slot4;
            zuuluu = option.getApplication;
            option = zuuluu.bind(option)(offset);
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 9;
            zuuluu = romeon[zuuluu];
            romeon = yankee.bind(tangon)(zuuluu);
            yankee = romeon.hasFlag;
            foxtra = michal == option;
            zuuluu = undefined;
            if(foxtra) { _fun00002_ip = 207; continue _fun00001 }
 202:
            zuuluu = option.flags;
 207:
            foxtra = michal != zuuluu;
            option = 0;
            if(!foxtra) { _fun00002_ip = 219; continue _fun00001 }
 216:
            option = zuuluu;
 219:
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.EMBEDDED_FIRST_PARTY;
            zuuluu = yankee.bind(romeon)(option, zuuluu);
            if(zuuluu) { _fun00002_ip = 306; continue _fun00001 }
 238:
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 8;
            zuuluu = yankee[zuuluu];
            romeon = option.bind(tangon)(zuuluu);
            yankee = {};
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.INVALID_COMMAND;
            yankee['errorCode'] = zuuluu;
            zuuluu = romeon.prototype;
            option = Object.create(zuuluu, {constructor: {value: romeon}});
            backup = 'This application cannot access this API';
            sizing = option;
            kiloes = yankee;
            zuuluu = new sizing[romeon](kiloes, backup, foxtra);
            zuuluu = zuuluu instanceof Object ? zuuluu : option;
            throw zuuluu;
 306:
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 10;
            zuuluu = yankee[zuuluu];
            option = option.bind(tangon)(zuuluu);
            zuuluu = option.getActiveAnalyticsSessionIDs;
            zuuluu = zuuluu.bind(option)(offset);
            option = {};
            option['activity_application_id'] = offset;
            verify = verify.type;
            option['activity_channel_type'] = verify;
            option['activity_guild_id'] = report;
            report = michal == zuuluu;
            michal = undefined;
            if(report) { _fun00002_ip = 380; continue _fun00001 }
 374:
            michal = zuuluu.activityUserSessionId;
 380:
            option['activity_user_session_id'] = michal;
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 11;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.track;
            michal = {};
            kiloes = michal;
            backup = option;
            option = copyDataProperties(kiloes, backup);
            kiloes = michal;
            backup = golfie;
            golfie = copyDataProperties(kiloes, backup);
            michal = zuuluu.bind(report)(oscard, michal);
            return tangon;
 440:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot8;
            entity = entity.INVALID_COMMAND;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            backup = 'Invalid channel';
            sizing = michal;
            kiloes = zuuluu;
            entity = new sizing[tangon](kiloes, backup, foxtra);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    golfie = tangon.GET_APPLICATION_TICKET;
    tangon = {};
    tangon['scope'] = verify;
    option = function(argFoo) { // Original name: handler
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.socket;
            entity = entity.application;
            option = entity.id;
            entity = null;
            if(!(entity != option)) { _fun00004_ip = 171; continue _fun00003 }
 28:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.HTTP;
            michal = zuuluu.post;
            entity = {'url': null, 'body': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
            report = _closure1_slot7;
            tangon = report.APPLICATION_TICKET;
            tangon = tangon.bind(report)(option);
            entity['url'] = tangon;
            tangon = {};
            golfie = _closure1_slot5;
            report = golfie.inTestModeForApplication;
            report = report.bind(golfie)(option);
            if(report) { _fun00004_ip = 134; continue _fun00003 }
 119:
            golfie = _closure1_slot3;
            oscard = golfie.inDevModeForApplication;
            report = oscard.bind(golfie)(option);
 134:
            tangon['test_mode'] = report;
            entity['body'] = tangon;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.then;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 171:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 8;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = {};
            entity = _closure1_slot8;
            entity = entity.INVALID_COMMAND;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            verify = 'No application.';
            yankee = michal;
            offset = zuuluu;
            entity = new yankee[tangon](offset, verify, option);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/application.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();