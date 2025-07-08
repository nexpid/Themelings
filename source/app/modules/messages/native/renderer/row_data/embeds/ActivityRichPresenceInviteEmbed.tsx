// app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SpotifyApplication;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityActionTypes;
    var _closure1_slot10 = golfie;
    tangon = tangon.ActivityTypes;
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isSpotifyParty;
    var _closure1_slot12 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: ActivityRichPresenceInviteEmbed
        entity = null;
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: createActivityRichPresenceInviteEmbed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            update = argFoo;
            echoed = argBar;
            var _closure2_slot0 = echoed;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            option = undefined;
            michal = michal.bind(option)(entity);
            entity = michal.getIsRichPresenceActivityInviteRedesignEnabled;
            entity = entity.bind(michal)();
            if(!entity) { _fun00002_ip = 250; continue _fun00001 }
 53:
            entity = null;
            if(!(entity != echoed)) { _fun00002_ip = 250; continue _fun00001 }
 62:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 11;
            michal = report[michal];
            zuuluu = zuuluu.bind(option)(michal);
            michal = zuuluu.getApplicationFromMessage;
            zuuluu = michal.bind(zuuluu)(update);
            michal = update.application;
            report = entity == michal;
            offset = undefined;
            if(report) { _fun00002_ip = 112; continue _fun00001 }
 107:
            offset = michal.id;
 112:
            report = entity != offset;
            michal = null;
            if(!report) { _fun00002_ip = 136; continue _fun00001 }
 121:
            oscard = _closure1_slot3;
            report = oscard.getApplication;
            michal = report.bind(oscard)(offset);
 136:
            report = entity == michal;
            if(!report) { _fun00002_ip = 147; continue _fun00001 }
 143:
            report = entity != offset;
 147:
            if(!report) { _fun00002_ip = 171; continue _fun00001 }
 150:
            verify = _closure1_slot3;
            oscard = verify.isFetchingApplication;
            verify = oscard.bind(verify)(offset);
            oscard = false;
            report = oscard === verify;
 171:
            if(!report) { _fun00002_ip = 208; continue _fun00001 }
 174:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 9;
            report = verify[report];
            verify = oscard.bind(option)(report);
            oscard = verify.fetchApplication;
            report = false;
            report = oscard.bind(verify)(offset, report);
 208:
            output = zuuluu;
            if(!(entity != michal)) { _fun00002_ip = 218; continue _fun00001 }
 215:
            output = michal;
 218:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getId;
            sizing = michal.bind(zuuluu)();
            michal = function(argFoo, argBar, argBaz) { // Original name: getPresenceActivity
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    oscard = argBar;
                    golfie = argBaz;
                    michal = entity.application;
                    zuuluu = null;
                    if(!(zuuluu == michal)) { _fun00004_ip = 61; continue _fun00003 }
 20:
                    option = _closure1_slot8;
                    report = option.findActivity;
                    michal = entity.author;
                    tangon = michal.id;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        entity = _closure1_slot11;
                        entity = entity.LISTENING;
                        entity = michal === entity;
                        return entity;
                    };
                    michal = report.bind(option)(tangon, michal);
                    return michal;
 61:
                    michal = entity.author;
                    report = michal.id;
                    michal = entity.activity;
                    zuuluu = zuuluu == michal;
                    option = undefined;
                    if(zuuluu) { _fun00004_ip = 92; continue _fun00003 }
 87:
                    option = michal.type;
 92:
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.JOIN_REQUEST;
                    tangon = report;
                    if(!(option === zuuluu)) { _fun00004_ip = 148; continue _fun00003 }
 112:
                    zuuluu = golfie;
                    if(!(report === golfie)) { _fun00004_ip = 145; continue _fun00003 }
 119:
                    report = oscard.isPrivate;
                    report = report.bind(oscard)();
                    zuuluu = golfie;
                    if(!report) { _fun00004_ip = 145; continue _fun00003 }
 135:
                    report = oscard.getRecipientId;
                    zuuluu = report.bind(oscard)();
 145:
                    tangon = zuuluu;
 148:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getApplicationActivity;
                    entity = entity.application;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(tangon, entity);
                    return entity;
                }
            };
            verify = michal.bind(option)(update, echoed, sizing);
            if(!(entity == output)) { _fun00002_ip = 252; continue _fun00001 }
 250:
            return option;
 252:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            romeon = 12;
            michal = michal[romeon];
            oscard = zuuluu.bind(option)(michal);
            report = oscard.getHeaderText;
            zuuluu = output.name;
            offset = update.activity;
            yankee = entity == offset;
            michal = undefined;
            if(yankee) { _fun00002_ip = 303; continue _fun00001 }
 298:
            michal = offset.type;
 303:
            kiloes = report.bind(oscard)(zuuluu, michal);
            report = _closure1_slot1;
            michal = _closure1_slot2;
            zuuluu = 13;
            zuuluu = michal[zuuluu];
            report = report.bind(option)(zuuluu);
            zuuluu = output.id;
            zuuluu = report.bind(option)(verify, update, zuuluu);
            foxtra = !zuuluu;
            if(!(entity != verify)) { _fun00002_ip = 412; continue _fun00001 }
 348:
            zuuluu = verify.party;
            if(!(entity != zuuluu)) { _fun00002_ip = 412; continue _fun00001 }
 358:
            zuuluu = global;
            oscard = zuuluu.Array;
            report = oscard.from;
            yankee = _closure1_slot7;
            offset = yankee.getParty;
            zuuluu = verify.party;
            zuuluu = zuuluu.id;
            zuuluu = offset.bind(yankee)(zuuluu);
            if(!(entity == zuuluu)) { _fun00002_ip = 405; continue _fun00001 }
 401:
            zuuluu = new Array(0);
 405:
            result = report.bind(oscard)(zuuluu);
            _fun00002_ip = 416; continue _fun00001;
 412:
            result = new Array(0);
 416:
            oscard = _closure1_slot0;
            zuuluu = 14;
            zuuluu = michal[zuuluu];
            report = oscard.bind(option)(zuuluu);
            zuuluu = report.getPartySize;
            zuuluu = zuuluu.bind(report)(verify);
            yankee = zuuluu.maxPartySize;
            ctrled = 15;
            zuuluu = michal[ctrled];
            zuuluu = oscard.bind(option)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            michal = michal[ctrled];
            michal = oscard.bind(option)(michal);
            michal = michal.t;
            michal = michal.OAB5TE;
            michal = zuuluu.bind(report)(michal);
            if(foxtra) { _fun00002_ip = 749; continue _fun00001 }
 504:
            report = result.map;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.getUser;
                    entity = argFoo;
                    golfie = zuuluu.bind(tangon)(entity);
                    entity = null;
                    if(!(entity == golfie)) { _fun00006_ip = 67; continue _fun00005 }
 27:
                    tangon = _closure1_slot5;
                    michal = {};
                    zuuluu = '0005';
                    michal['discriminator'] = zuuluu;
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    offset = zuuluu;
                    verify = michal;
                    michal = new offset[tangon](verify, option);
                    golfie = michal instanceof Object ? michal : zuuluu;
 67:
                    michal = global;
                    zuuluu = michal.String;
                    tangon = entity == golfie;
                    michal = undefined;
                    entity = undefined;
                    if(tangon) { _fun00006_ip = 113; continue _fun00005 }
 86:
                    oscard = golfie.getAvatarURL;
                    tangon = _closure2_slot0;
                    report = tangon.guild_id;
                    tangon = 64;
                    entity = oscard.bind(golfie)(report, tangon);
 113:
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                }
            };
            oscard = report.bind(result)(zuuluu);
            zuuluu = entity == verify;
            vacuum = undefined;
            if(zuuluu) { _fun00002_ip = 550; continue _fun00001 }
 530:
            zuuluu = verify.timestamps;
            report = entity == zuuluu;
            vacuum = undefined;
            if(report) { _fun00002_ip = 550; continue _fun00001 }
 545:
            vacuum = zuuluu.start;
 550:
            if(!(entity == vacuum)) { _fun00002_ip = 572; continue _fun00001 }
 554:
            report = entity == verify;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 569; continue _fun00001 }
 563:
            zuuluu = verify.created_at;
 569:
            vacuum = zuuluu;
 572:
            zuuluu = entity == verify;
            report = undefined;
            if(zuuluu) { _fun00002_ip = 601; continue _fun00001 }
 581:
            zuuluu = verify.timestamps;
            offset = entity == zuuluu;
            report = undefined;
            if(offset) { _fun00002_ip = 601; continue _fun00001 }
 596:
            report = zuuluu.end;
 601:
            offset = entity != vacuum;
            zuuluu = '';
            if(!offset) { _fun00002_ip = 671; continue _fun00001 }
 612:
            backup = _closure1_slot0;
            source = _closure1_slot2;
            offset = 16;
            offset = source[offset];
            source = backup.bind(option)(offset);
            backup = source.formatActiveTimestamp;
            offset = {};
            offset['start'] = vacuum;
            offset['end'] = report;
            report = global;
            vacuum = report.Date;
            report = vacuum.now;
            report = report.bind(vacuum)();
            zuuluu = backup.bind(source)(offset, report);
 671:
            offset = _closure1_slot0;
            report = _closure1_slot2;
            report = report[romeon];
            backup = offset.bind(option)(report);
            offset = backup.getPartyText;
            report = {};
            report['maxPartySize'] = yankee;
            result = result.length;
            report['partySize'] = result;
            source = update.activity;
            vacuum = entity == source;
            result = undefined;
            if(vacuum) { _fun00002_ip = 731; continue _fun00001 }
 726:
            result = source.type;
 731:
            report['activityActionType'] = result;
            report = offset.bind(backup)(report);
            offset = oscard;
            oscard = michal;
            _fun00002_ip = 843; continue _fun00001;
 749:
            result = _closure1_slot0;
            michal = _closure1_slot2;
            romeon = michal[romeon];
            backup = result.bind(option)(romeon);
            romeon = backup.getDeadGameInviteText;
            papara = backup;
            cntext = update;
            record = output;
            config = echoed;
            sequen = sizing;
            zuuluu = papara[romeon](cntext, record, config, sequen, vacuum);
            backup = michal[ctrled];
            backup = result.bind(option)(backup);
            sizing = backup.intl;
            backup = sizing.string;
            michal = michal[ctrled];
            michal = result.bind(option)(michal);
            michal = michal.t;
            michal = michal.pwEQoq;
            oscard = backup.bind(sizing)(michal);
            report = '';
            offset = null;
 843:
            romeon = _closure1_slot12;
            backup = entity == verify;
            michal = undefined;
            if(backup) { _fun00002_ip = 876; continue _fun00001 }
 856:
            backup = verify.party;
            sizing = entity == backup;
            michal = undefined;
            if(sizing) { _fun00002_ip = 876; continue _fun00001 }
 871:
            michal = backup.id;
 876:
            romeon = romeon.bind(option)(michal);
            if(romeon) { _fun00002_ip = 902; continue _fun00001 }
 884:
            backup = output.id;
            michal = _closure1_slot4;
            michal = michal.id;
            romeon = backup === michal;
 902:
            michal = output.icon;
            michal = entity != michal;
            backup = null;
            if(!michal) { _fun00002_ip = 965; continue _fun00001 }
 916:
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            michal = 17;
            michal = result[michal];
            update = sizing.bind(option)(michal);
            echoed = update.getAppIconSrc;
            result = output.id;
            sizing = output.icon;
            michal = output.bot;
            backup = echoed.bind(update)(result, sizing, michal);
 965:
            michal = output.name;
            if(!romeon) { _fun00002_ip = 1205; continue _fun00001 }
 976:
            if(!(entity != verify)) { _fun00002_ip = 999; continue _fun00001 }
 980:
            sizing = verify.details;
            if(!(entity != sizing)) { _fun00002_ip = 999; continue _fun00001 }
 990:
            sizing = verify.state;
            if(!(entity == sizing)) { _fun00002_ip = 1006; continue _fun00001 }
 999:
            sizing = output.name;
            _fun00002_ip = 1102; continue _fun00001;
 1006:
            echoed = _closure1_slot0;
            result = _closure1_slot2;
            update = result[ctrled];
            update = echoed.bind(option)(update);
            source = update.intl;
            update = source.formatToPlainString;
            result = result[ctrled];
            result = echoed.bind(option)(result);
            result = result.t;
            echoed = result.JCvHt7;
            result = {};
            vacuum = verify.details;
            result['track'] = vacuum;
            vacuum = verify.state;
            result['artist'] = vacuum;
            source = update.bind(source)(echoed, result);
            update = source.replace;
            echoed = '\n';
            result = ' ';
            sizing = update.bind(source)(echoed, result);
 1102:
            echoed = _closure1_slot1;
            update = _closure1_slot2;
            result = 18;
            result = update[result];
            result = echoed.bind(option)(result);
            output = output.id;
            result = result.bind(option)(verify, output);
            echoed = entity != result;
            output = undefined;
            if(!echoed) { _fun00002_ip = 1145; continue _fun00001 }
 1142:
            output = result;
 1145:
            source = _closure1_slot0;
            result = _closure1_slot2;
            echoed = result[ctrled];
            echoed = source.bind(option)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = result[ctrled];
            result = source.bind(option)(result);
            result = result.t;
            result = result.sTo7s7;
            oscard = echoed.bind(update)(result);
            backup = output;
            michal = sizing;
 1205:
            entity = entity != backup;
            result = undefined;
            if(!entity) { _fun00002_ip = 1217; continue _fun00001 }
 1214:
            result = backup;
 1217:
            entity = {};
            entity['footerLabel'] = oscard;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            sizing = 17;
            sizing = golfie[sizing];
            output = oscard.bind(option)(sizing);
            sizing = output.getAppGradientColors;
            sizing = sizing.bind(output)(result);
            entity['gradientColors'] = sizing;
            entity['headerText'] = kiloes;
            entity['iconSrc'] = backup;
            foxtra = !foxtra;
            entity['isActive'] = foxtra;
            entity['isSpotifyParty'] = romeon;
            entity['maxPartySize'] = yankee;
            entity['partyMemberAvatarURIs'] = offset;
            entity['partySizeText'] = report;
            report = 19;
            report = golfie[report];
            golfie = oscard.bind(option)(report);
            oscard = golfie.getJoinFromSupportedPlatformsIconKeys;
            report = {};
            report['presenceActivity'] = verify;
            report['currentPlatform'] = option;
            oscard = oscard.bind(golfie)(report);
            report = oscard.filter;
            tangon = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 19;
                    entity = entity[oscard];
                    report = undefined;
                    entity = tangon.bind(report)(entity);
                    entity = entity.IconKey;
                    entity = entity.IOS;
                    entity = zuuluu !== entity;
                    if(!entity) { _fun00008_ip = 80; continue _fun00007 }
 47:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = tangon.bind(report)(michal);
                    michal = michal.IconKey;
                    michal = michal.ANDROID;
                    entity = zuuluu !== michal;
 80:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
            entity['platformIconKeys'] = tangon;
            entity['subtitle'] = zuuluu;
            entity['title'] = michal;
            return entity;
        }
    };
    zuuluu['createActivityRichPresenceInviteEmbed'] = michal;
    return entity;
})();