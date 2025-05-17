// app/modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: ChangeChannelNameSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.row;
            tangon = undefined;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            yankee = oscard.message;
            var _closure2_slot0 = yankee;
            entity = yankee.getChannelId;
            foxtra = entity.bind(yankee)();
            var _closure2_slot1 = foxtra;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 8;
            zuuluu = golfie[zuuluu];
            option = report.bind(tangon)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot4;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = golfie.bind(option)(report, zuuluu);
            golfie = null;
            zuuluu = golfie == verify;
            report = undefined;
            if(zuuluu) { _fun00002_ip = 141; continue _fun00001 }
 116:
            zuuluu = verify.isGroupDM;
            zuuluu = golfie == zuuluu;
            report = undefined;
            if(zuuluu) { _fun00002_ip = 141; continue _fun00001 }
 131:
            zuuluu = verify.isGroupDM;
            report = zuuluu.bind(verify)();
 141:
            zuuluu = golfie != report;
            if(!zuuluu) { _fun00002_ip = 151; continue _fun00001 }
 148:
            zuuluu = report;
 151:
            option = golfie == verify;
            report = undefined;
            if(option) { _fun00002_ip = 185; continue _fun00001 }
 160:
            option = verify.isForumPost;
            option = golfie == option;
            report = undefined;
            if(option) { _fun00002_ip = 185; continue _fun00001 }
 175:
            option = verify.isForumPost;
            report = option.bind(verify)();
 185:
            offset = golfie != report;
            if(!offset) { _fun00002_ip = 195; continue _fun00001 }
 192:
            offset = report;
 195:
            _closure2_slot2 = offset;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            report = 4;
            report = option[report];
            report = golfie.bind(tangon)(report);
            report = report.bind(tangon)(yankee);
            romeon = report.nick;
            _closure2_slot3 = romeon;
            golfie = _closure1_slot0;
            report = 5;
            report = option[report];
            verify = golfie.bind(tangon)(report);
            option = verify.useIsGdmBedazzleExperimentEnabled;
            golfie = {};
            golfie['autoTrackExposure'] = zuuluu;
            report = 'NativeChangeChannelNameSystemMessage';
            verify = option.bind(verify)(report, foxtra, golfie);
            if(!verify) { _fun00002_ip = 282; continue _fun00001 }
 279:
            verify = zuuluu;
 282:
            _closure2_slot4 = verify;
            golfie = _closure1_slot3;
            option = golfie.useCallback;
            report = new Array(1);
            report[0] = foxtra;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                tangon = _closure2_slot1;
                michal['channelId'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option = option.bind(golfie)(zuuluu, report);
            _closure2_slot5 = option;
            report = golfie.useMemo;
            zuuluu = new Array(7);
            zuuluu[0] = foxtra;
            zuuluu[1] = romeon;
            romeon = yankee.author;
            romeon = romeon.id;
            zuuluu[2] = romeon;
            yankee = yankee.content;
            zuuluu[3] = yankee;
            zuuluu[4] = offset;
            zuuluu[5] = verify;
            zuuluu[6] = option;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    golfie = {};
                    entity = 'bindUserMenu';
                    golfie['action'] = entity;
                    entity = _closure2_slot0;
                    entity = entity.author;
                    entity = entity.id;
                    golfie['userId'] = entity;
                    entity = _closure2_slot1;
                    golfie['messageChannelId'] = entity;
                    entity = true;
                    golfie['medium'] = entity;
                    offset = _closure2_slot4;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 6;
                    tangon = verify[michal];
                    zuuluu = undefined;
                    tangon = option.bind(zuuluu)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToParts;
                    if(offset) { _fun00004_ip = 173; continue _fun00003 }
 93:
                    offset = _closure2_slot2;
                    yankee = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[michal];
                    entity = yankee.bind(zuuluu)(entity);
                    entity = entity.t;
                    if(offset) { _fun00004_ip = 130; continue _fun00003 }
 122:
                    offset = entity.XCPMEB;
                    _fun00004_ip = 136; continue _fun00003;
 130:
                    offset = entity.qa0e/v;
 136:
                    entity = {};
                    yankee = _closure2_slot3;
                    entity['username'] = yankee;
                    entity['usernameOnClick'] = golfie;
                    yankee = _closure2_slot0;
                    yankee = yankee.content;
                    entity['channelName'] = yankee;
                    entity = tangon.bind(report)(offset, entity);
                    _fun00004_ip = 237; continue _fun00003;
 173:
                    michal = verify[michal];
                    michal = option.bind(zuuluu)(michal);
                    michal = michal.t;
                    zuuluu = michal.rk0be3;
                    michal = {};
                    option = _closure2_slot3;
                    michal['username'] = option;
                    michal['usernameOnClick'] = golfie;
                    golfie = _closure2_slot0;
                    golfie = golfie.content;
                    michal['channelName'] = golfie;
                    oscard = _closure2_slot5;
                    michal['onEditGroup'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 237:
                    return entity;
                }
            };
            report = report.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot5;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 10;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = oscard;
            entity['content'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: createChangeChannelNameSystemMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            yankee = tangon.message;
            report = tangon.theme;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 3;
            entity = oscard[entity];
            zuuluu = undefined;
            entity = golfie.bind(zuuluu)(entity);
            foxtra = entity.bind(zuuluu)(report);
            report = _closure1_slot0;
            entity = 4;
            entity = oscard[entity];
            report = report.bind(zuuluu)(entity);
            entity = report.getMessageAuthor;
            entity = entity.bind(report)(yankee);
            backup = entity.nick;
            offset = {};
            entity = 'bindUserMenu';
            offset['action'] = entity;
            entity = yankee.author;
            entity = entity.id;
            offset['userId'] = entity;
            entity = yankee.channel_id;
            offset['messageChannelId'] = entity;
            entity = true;
            offset['medium'] = entity;
            oscard = _closure1_slot4;
            report = oscard.getChannel;
            entity = yankee.channel_id;
            oscard = report.bind(oscard)(entity);
            romeon = null;
            entity = romeon == oscard;
            report = undefined;
            if(entity) { _fun00006_ip = 175; continue _fun00005 }
 150:
            entity = oscard.isGroupDM;
            entity = romeon == entity;
            report = undefined;
            if(entity) { _fun00006_ip = 175; continue _fun00005 }
 165:
            entity = oscard.isGroupDM;
            report = entity.bind(oscard)();
 175:
            entity = romeon != report;
            if(!entity) { _fun00006_ip = 185; continue _fun00005 }
 182:
            entity = report;
 185:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 5;
            report = golfie[report];
            verify = oscard.bind(zuuluu)(report);
            option = verify.isGdmBedazzleExperimentEnabled;
            golfie = yankee.channel_id;
            oscard = {};
            oscard['autoTrackExposure'] = entity;
            report = 'createChangeChannelNameSystemMessage';
            report = option.bind(verify)(report, golfie, oscard);
            if(!report) { _fun00006_ip = 240; continue _fun00005 }
 237:
            report = entity;
 240:
            oscard = yankee.content;
            entity = '';
            if(!(entity !== oscard)) { _fun00006_ip = 286; continue _fun00005 }
 253:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.t;
            verify = entity.rk0be3;
            _fun00006_ip = 319; continue _fun00005;
 286:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.t;
            verify = entity.hToFyc;
 319:
            entity = {};
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            sizing = 6;
            oscard = oscard[sizing];
            oscard = golfie.bind(zuuluu)(oscard);
            option = oscard.intl;
            golfie = option.formatToParts;
            if(report) { _fun00006_ip = 429; continue _fun00005 }
 355:
            oscard = tangon.isForumPost;
            kiloes = _closure1_slot0;
            report = _closure1_slot2;
            report = report[sizing];
            report = kiloes.bind(zuuluu)(report);
            report = report.t;
            if(oscard) { _fun00006_ip = 394; continue _fun00005 }
 386:
            oscard = report.XCPMEB;
            _fun00006_ip = 400; continue _fun00005;
 394:
            oscard = report.qa0e/v;
 400:
            report = {};
            report['username'] = backup;
            report['usernameOnClick'] = offset;
            kiloes = yankee.content;
            report['channelName'] = kiloes;
            report = golfie.bind(option)(oscard, report);
            _fun00006_ip = 503; continue _fun00005;
 429:
            oscard = {};
            oscard['username'] = backup;
            oscard['usernameOnClick'] = offset;
            offset = yankee.content;
            oscard['channelName'] = offset;
            offset = {};
            backup = 'bindOpenGdmCustomizeActionSheet';
            offset['action'] = backup;
            backup = romeon == foxtra;
            romeon = undefined;
            if(backup) { _fun00006_ip = 477; continue _fun00005 }
 471:
            romeon = foxtra.linkColor;
 477:
            offset['linkColor'] = romeon;
            yankee = yankee.channel_id;
            offset['messageChannelId'] = yankee;
            oscard['onEditGroup'] = offset;
            report = golfie.bind(option)(verify, oscard);
 503:
            entity['content'] = report;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 7;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            result = michal.bind(zuuluu)(tangon);
            echoed = entity;
            michal = copyDataProperties(echoed, result);
            return entity;
        }
    };
    zuuluu['createChangeChannelNameSystemMessage'] = michal;
    return entity;
})();