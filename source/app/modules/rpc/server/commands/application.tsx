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
            zuuluu = entity.socket;
            entity = entity.args;
            report = entity.event_name;
            oscard = entity.event_properties;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 6;
            verify = golfie[tangon];
            entity = undefined;
            yankee = option.bind(entity)(verify);
            offset = yankee.validatePostMessageTransport;
            verify = zuuluu.transport;
            verify = offset.bind(yankee)(verify);
            tangon = golfie[tangon];
            verify = option.bind(entity)(tangon);
            option = verify.validateApplication;
            tangon = zuuluu.application;
            tangon = option.bind(verify)(tangon);
            zuuluu = zuuluu.application;
            verify = zuuluu.id;
            tangon = _closure1_slot1;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            offset = zuuluu.bind(entity)();
            zuuluu = null;
            tangon = zuuluu == offset;
            option = undefined;
            if(tangon) { _fun00002_ip = 145; continue _fun00001 }
 135:
            tangon = offset.getGuildId;
            option = tangon.bind(offset)();
 145:
            golfie = _closure1_slot4;
            tangon = golfie.getApplication;
            golfie = tangon.bind(golfie)(verify);
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            tangon = 8;
            tangon = romeon[tangon];
            romeon = yankee.bind(entity)(tangon);
            yankee = romeon.hasFlag;
            foxtra = zuuluu == golfie;
            tangon = undefined;
            if(foxtra) { _fun00002_ip = 200; continue _fun00001 }
 195:
            tangon = golfie.flags;
 200:
            foxtra = zuuluu != tangon;
            golfie = 0;
            if(!foxtra) { _fun00002_ip = 212; continue _fun00001 }
 209:
            golfie = tangon;
 212:
            tangon = _closure1_slot6;
            tangon = tangon.EMBEDDED_FIRST_PARTY;
            tangon = yankee.bind(romeon)(golfie, tangon);
            if(tangon) { _fun00002_ip = 299; continue _fun00001 }
 231:
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            tangon = 9;
            tangon = yankee[tangon];
            romeon = golfie.bind(entity)(tangon);
            yankee = {};
            tangon = _closure1_slot8;
            tangon = tangon.INVALID_COMMAND;
            yankee['errorCode'] = tangon;
            tangon = romeon.prototype;
            golfie = Object.create(tangon, {constructor: {value: romeon}});
            backup = 'This application cannot access this API';
            sizing = golfie;
            kiloes = yankee;
            tangon = new sizing[romeon](kiloes, backup, foxtra);
            tangon = tangon instanceof Object ? tangon : golfie;
            throw tangon;
 299:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 10;
            tangon = yankee[tangon];
            golfie = golfie.bind(entity)(tangon);
            tangon = golfie.getActiveAnalyticsSessionIDs;
            tangon = tangon.bind(golfie)(verify);
            golfie = {};
            golfie['activity_application_id'] = verify;
            yankee = zuuluu == offset;
            verify = undefined;
            if(yankee) { _fun00002_ip = 353; continue _fun00001 }
 348:
            verify = offset.type;
 353:
            golfie['activity_channel_type'] = verify;
            golfie['activity_guild_id'] = option;
            option = zuuluu == tangon;
            zuuluu = undefined;
            if(option) { _fun00002_ip = 382; continue _fun00001 }
 376:
            zuuluu = tangon.activityUserSessionId;
 382:
            golfie['activity_user_session_id'] = zuuluu;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.track;
            michal = {};
            kiloes = michal;
            backup = golfie;
            golfie = copyDataProperties(kiloes, backup);
            kiloes = michal;
            backup = oscard;
            oscard = copyDataProperties(kiloes, backup);
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
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
            michal = 9;
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