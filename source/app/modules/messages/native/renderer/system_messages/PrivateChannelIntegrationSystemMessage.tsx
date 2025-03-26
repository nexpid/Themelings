// app/modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageTypes;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: PrivateChannelIntegrationSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.row;
            offset = entity.type;
            var _closure2_slot0 = offset;
            tangon = undefined;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            zuuluu = golfie.message;
            var _closure2_slot1 = zuuluu;
            oscard = zuuluu.author;
            var _closure2_slot2 = oscard;
            romeon = zuuluu.application;
            var _closure2_slot3 = romeon;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 3;
            report = verify[report];
            option = option.bind(tangon)(report);
            report = option.useNullableMessageAuthor;
            report = report.bind(option)(zuuluu);
            report = report.nick;
            var _closure2_slot4 = report;
            yankee = _closure1_slot3;
            verify = yankee.useMemo;
            foxtra = zuuluu.channel_id;
            option = new Array(2);
            option[0] = foxtra;
            oscard = oscard.id;
            option[1] = oscard;
            oscard = function() {
                entity = {};
                michal = 'bindUserMenu';
                entity['action'] = michal;
                zuuluu = _closure2_slot2;
                zuuluu = zuuluu.id;
                entity['userId'] = zuuluu;
                michal = _closure2_slot1;
                michal = michal.channel_id;
                entity['messageChannelId'] = michal;
                michal = true;
                entity['medium'] = michal;
                return entity;
            };
            verify = verify.bind(yankee)(oscard, option);
            var _closure2_slot5 = verify;
            oscard = null;
            oscard = oscard == romeon;
            foxtra = undefined;
            if(oscard) { _fun00002_ip = 167; continue _fun00001 }
 161:
            foxtra = romeon.bot;
 167:
            _closure2_slot6 = foxtra;
            option = _closure1_slot3;
            yankee = option.useMemo;
            oscard = new Array(2);
            oscard[0] = foxtra;
            zuuluu = zuuluu.channel_id;
            oscard[1] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = null;
                    michal = entity != michal;
                    entity = undefined;
                    if(!michal) { _fun00004_ip = 67; continue _fun00003 }
 18:
                    michal = {};
                    tangon = 'bindUserMenu';
                    michal['action'] = tangon;
                    tangon = _closure2_slot6;
                    tangon = tangon.id;
                    michal['userId'] = tangon;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.channel_id;
                    michal['messageChannelId'] = zuuluu;
                    zuuluu = true;
                    michal['medium'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            yankee = yankee.bind(option)(zuuluu, oscard);
            _closure2_slot7 = yankee;
            oscard = option.useMemo;
            zuuluu = new Array(5);
            zuuluu[0] = romeon;
            zuuluu[1] = yankee;
            zuuluu[2] = report;
            zuuluu[3] = offset;
            zuuluu[4] = verify;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = _closure1_slot4;
                    michal = michal.PRIVATE_CHANNEL_INTEGRATION_ADDED;
                    if(!(michal !== zuuluu)) { _fun00006_ip = 151; continue _fun00005 }
 27:
                    michal = _closure1_slot4;
                    michal = michal.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
                    if(!(michal !== zuuluu)) { _fun00006_ip = 80; continue _fun00005 }
 41:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    oscard = report.bind(michal)(zuuluu);
                    report = oscard.assertNever;
                    zuuluu = _closure2_slot0;
                    zuuluu = report.bind(oscard)(zuuluu);
                    return michal;
 80:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
                    michal = {};
                    oscard = _closure2_slot3;
                    michal['application'] = oscard;
                    oscard = _closure2_slot4;
                    michal['username'] = oscard;
                    oscard = _closure2_slot5;
                    michal['usernameOnClick'] = oscard;
                    oscard = _closure2_slot7;
                    michal['applicationNameOnClick'] = oscard;
                    michal = zuuluu.bind(report)(michal);
                    return michal;
 151:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 4;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getPrivateChannelIntegrationAddedSystemMessageASTContent;
                    entity = {};
                    report = _closure2_slot3;
                    entity['application'] = report;
                    report = _closure2_slot4;
                    entity['username'] = report;
                    report = _closure2_slot5;
                    entity['usernameOnClick'] = report;
                    tangon = _closure2_slot7;
                    entity['applicationNameOnClick'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            oscard = oscard.bind(option)(michal, zuuluu);
            zuuluu = _closure1_slot5;
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 7;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = golfie;
            entity['content'] = oscard;
            entity['username'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: createPrivateChannelIntegrationSystemMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = tangon.message;
            entity = oscard.author;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 3;
            report = report[zuuluu];
            zuuluu = undefined;
            golfie = golfie.bind(zuuluu)(report);
            report = golfie.getMessageAuthor;
            report = report.bind(golfie)(oscard);
            yankee = report.nick;
            offset = {};
            golfie = 'bindUserMenu';
            offset['action'] = golfie;
            entity = entity.id;
            offset['userId'] = entity;
            entity = oscard.channel_id;
            offset['messageChannelId'] = entity;
            report = true;
            offset['medium'] = report;
            romeon = oscard.application;
            option = null;
            verify = option == romeon;
            entity = undefined;
            if(verify) { _fun00008_ip = 116; continue _fun00007 }
 110:
            entity = romeon.bot;
 116:
            entity = option != entity;
            verify = undefined;
            if(!entity) { _fun00008_ip = 164; continue _fun00007 }
 125:
            entity = {};
            entity['action'] = golfie;
            golfie = romeon.bot;
            golfie = golfie.id;
            entity['userId'] = golfie;
            oscard = oscard.channel_id;
            entity['messageChannelId'] = oscard;
            entity['medium'] = report;
            verify = entity;
 164:
            entity = {};
            report = _closure1_slot4;
            oscard = report.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            report = argBar;
            if(!(report !== oscard)) { _fun00008_ip = 236; continue _fun00007 }
 183:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 4;
            report = golfie[report];
            golfie = oscard.bind(zuuluu)(report);
            oscard = golfie.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
            report = {};
            report['application'] = romeon;
            report['username'] = yankee;
            report['usernameOnClick'] = offset;
            report['applicationNameOnClick'] = verify;
            report = oscard.bind(golfie)(report);
            _fun00008_ip = 287; continue _fun00007;
 236:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 4;
            oscard = option[oscard];
            option = golfie.bind(zuuluu)(oscard);
            golfie = option.getPrivateChannelIntegrationAddedSystemMessageASTContent;
            oscard = {};
            oscard['application'] = romeon;
            oscard['username'] = yankee;
            oscard['usernameOnClick'] = offset;
            oscard['applicationNameOnClick'] = verify;
            report = golfie.bind(option)(oscard);
 287:
            entity['content'] = report;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            foxtra = michal.bind(zuuluu)(tangon);
            backup = entity;
            michal = copyDataProperties(backup, foxtra);
            return entity;
        }
    };
    zuuluu['createPrivateChannelIntegrationSystemMessage'] = michal;
    return entity;
})();