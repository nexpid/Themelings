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
            if(!entity) { _fun00002_ip = 276; continue _fun00001 }
 53:
            entity = update.author;
            verify = null;
            if(!(verify != entity)) { _fun00002_ip = 276; continue _fun00001 }
 68:
            entity = update.activity;
            if(!(verify != entity)) { _fun00002_ip = 276; continue _fun00001 }
 81:
            if(!(verify != echoed)) { _fun00002_ip = 276; continue _fun00001 }
 88:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            michal = michal.bind(option)(entity);
            entity = michal.getApplicationFromMessage;
            michal = entity.bind(michal)(update);
            entity = update.application;
            zuuluu = verify == entity;
            offset = undefined;
            if(zuuluu) { _fun00002_ip = 138; continue _fun00001 }
 133:
            offset = entity.id;
 138:
            zuuluu = verify != offset;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 162; continue _fun00001 }
 147:
            report = _closure1_slot3;
            zuuluu = report.getApplication;
            entity = zuuluu.bind(report)(offset);
 162:
            zuuluu = verify == entity;
            if(!zuuluu) { _fun00002_ip = 173; continue _fun00001 }
 169:
            zuuluu = verify != offset;
 173:
            if(!zuuluu) { _fun00002_ip = 197; continue _fun00001 }
 176:
            oscard = _closure1_slot3;
            report = oscard.isFetchingApplication;
            oscard = report.bind(oscard)(offset);
            report = false;
            zuuluu = report === oscard;
 197:
            if(!zuuluu) { _fun00002_ip = 234; continue _fun00001 }
 200:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(option)(zuuluu);
            report = oscard.fetchApplication;
            zuuluu = false;
            zuuluu = report.bind(oscard)(offset, zuuluu);
 234:
            output = michal;
            if(!(verify != entity)) { _fun00002_ip = 244; continue _fun00001 }
 241:
            output = entity;
 244:
            michal = _closure1_slot6;
            entity = michal.getId;
            kiloes = entity.bind(michal)();
            entity = function(argFoo, argBar, argBaz) { // Original name: getPresenceActivity
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
            offset = entity.bind(option)(update, echoed, kiloes);
            if(!(verify == output)) { _fun00002_ip = 278; continue _fun00001 }
 276:
            return option;
 278:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 12;
            entity = entity[michal];
            oscard = zuuluu.bind(option)(entity);
            report = oscard.getHeaderText;
            zuuluu = output.name;
            yankee = update.activity;
            romeon = verify == yankee;
            entity = undefined;
            if(romeon) { _fun00002_ip = 329; continue _fun00001 }
 324:
            entity = yankee.type;
 329:
            sizing = report.bind(oscard)(zuuluu, entity);
            report = _closure1_slot1;
            entity = _closure1_slot2;
            zuuluu = 13;
            zuuluu = entity[zuuluu];
            report = report.bind(option)(zuuluu);
            zuuluu = output.id;
            zuuluu = report.bind(option)(offset, update, zuuluu);
            backup = !zuuluu;
            if(!(verify != offset)) { _fun00002_ip = 438; continue _fun00001 }
 374:
            zuuluu = offset.party;
            if(!(verify != zuuluu)) { _fun00002_ip = 438; continue _fun00001 }
 384:
            zuuluu = global;
            oscard = zuuluu.Array;
            report = oscard.from;
            romeon = _closure1_slot7;
            yankee = romeon.getParty;
            zuuluu = offset.party;
            zuuluu = zuuluu.id;
            zuuluu = yankee.bind(romeon)(zuuluu);
            if(!(verify == zuuluu)) { _fun00002_ip = 431; continue _fun00001 }
 427:
            zuuluu = new Array(0);
 431:
            result = report.bind(oscard)(zuuluu);
            _fun00002_ip = 442; continue _fun00001;
 438:
            result = new Array(0);
 442:
            oscard = _closure1_slot0;
            zuuluu = 14;
            zuuluu = entity[zuuluu];
            report = oscard.bind(option)(zuuluu);
            zuuluu = report.getPartySize;
            zuuluu = zuuluu.bind(report)(offset);
            romeon = zuuluu.maxPartySize;
            ctrled = 15;
            zuuluu = entity[ctrled];
            zuuluu = oscard.bind(option)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            entity = entity[ctrled];
            entity = oscard.bind(option)(entity);
            entity = entity.t;
            entity = entity.OAB5TE;
            entity = zuuluu.bind(report)(entity);
            if(backup) { _fun00002_ip = 775; continue _fun00001 }
 530:
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
            zuuluu = verify == offset;
            vacuum = undefined;
            if(zuuluu) { _fun00002_ip = 576; continue _fun00001 }
 556:
            zuuluu = offset.timestamps;
            report = verify == zuuluu;
            vacuum = undefined;
            if(report) { _fun00002_ip = 576; continue _fun00001 }
 571:
            vacuum = zuuluu.start;
 576:
            if(!(verify == vacuum)) { _fun00002_ip = 598; continue _fun00001 }
 580:
            report = verify == offset;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 595; continue _fun00001 }
 589:
            zuuluu = offset.created_at;
 595:
            vacuum = zuuluu;
 598:
            zuuluu = verify == offset;
            report = undefined;
            if(zuuluu) { _fun00002_ip = 627; continue _fun00001 }
 607:
            zuuluu = offset.timestamps;
            yankee = verify == zuuluu;
            report = undefined;
            if(yankee) { _fun00002_ip = 627; continue _fun00001 }
 622:
            report = zuuluu.end;
 627:
            yankee = verify != vacuum;
            zuuluu = '';
            if(!yankee) { _fun00002_ip = 697; continue _fun00001 }
 638:
            foxtra = _closure1_slot0;
            source = _closure1_slot2;
            yankee = 16;
            yankee = source[yankee];
            source = foxtra.bind(option)(yankee);
            foxtra = source.formatActiveTimestamp;
            yankee = {};
            yankee['start'] = vacuum;
            yankee['end'] = report;
            report = global;
            vacuum = report.Date;
            report = vacuum.now;
            report = report.bind(vacuum)();
            zuuluu = foxtra.bind(source)(yankee, report);
 697:
            yankee = _closure1_slot0;
            report = _closure1_slot2;
            report = report[michal];
            foxtra = yankee.bind(option)(report);
            yankee = foxtra.getPartyText;
            report = {};
            report['maxPartySize'] = romeon;
            result = result.length;
            report['partySize'] = result;
            source = update.activity;
            vacuum = verify == source;
            result = undefined;
            if(vacuum) { _fun00002_ip = 757; continue _fun00001 }
 752:
            result = source.type;
 757:
            report['activityActionType'] = result;
            report = yankee.bind(foxtra)(report);
            yankee = oscard;
            oscard = entity;
            _fun00002_ip = 869; continue _fun00001;
 775:
            result = _closure1_slot0;
            entity = _closure1_slot2;
            michal = entity[michal];
            foxtra = result.bind(option)(michal);
            michal = foxtra.getDeadGameInviteText;
            papara = foxtra;
            cntext = update;
            record = output;
            config = echoed;
            sequen = kiloes;
            zuuluu = papara[michal](cntext, record, config, sequen, vacuum);
            foxtra = entity[ctrled];
            foxtra = result.bind(option)(foxtra);
            kiloes = foxtra.intl;
            foxtra = kiloes.string;
            entity = entity[ctrled];
            entity = result.bind(option)(entity);
            entity = entity.t;
            entity = entity.pwEQoq;
            oscard = foxtra.bind(kiloes)(entity);
            report = '';
            yankee = null;
 869:
            michal = _closure1_slot12;
            foxtra = verify == offset;
            entity = undefined;
            if(foxtra) { _fun00002_ip = 902; continue _fun00001 }
 882:
            foxtra = offset.party;
            kiloes = verify == foxtra;
            entity = undefined;
            if(kiloes) { _fun00002_ip = 902; continue _fun00001 }
 897:
            entity = foxtra.id;
 902:
            foxtra = michal.bind(option)(entity);
            if(foxtra) { _fun00002_ip = 928; continue _fun00001 }
 910:
            michal = output.id;
            entity = _closure1_slot4;
            entity = entity.id;
            foxtra = michal === entity;
 928:
            entity = output.icon;
            entity = verify != entity;
            kiloes = null;
            if(!entity) { _fun00002_ip = 991; continue _fun00001 }
 942:
            michal = _closure1_slot0;
            result = _closure1_slot2;
            entity = 17;
            entity = result[entity];
            update = michal.bind(option)(entity);
            echoed = update.getAppIconSrc;
            result = output.id;
            michal = output.icon;
            entity = output.bot;
            kiloes = echoed.bind(update)(result, michal, entity);
 991:
            michal = output.name;
            if(!foxtra) { _fun00002_ip = 1231; continue _fun00001 }
 1002:
            if(!(verify != offset)) { _fun00002_ip = 1025; continue _fun00001 }
 1006:
            entity = offset.details;
            if(!(verify != entity)) { _fun00002_ip = 1025; continue _fun00001 }
 1016:
            entity = offset.state;
            if(!(verify == entity)) { _fun00002_ip = 1032; continue _fun00001 }
 1025:
            entity = output.name;
            _fun00002_ip = 1128; continue _fun00001;
 1032:
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
            vacuum = offset.details;
            result['track'] = vacuum;
            vacuum = offset.state;
            result['artist'] = vacuum;
            source = update.bind(source)(echoed, result);
            update = source.replace;
            echoed = '\n';
            result = ' ';
            entity = update.bind(source)(echoed, result);
 1128:
            echoed = _closure1_slot1;
            update = _closure1_slot2;
            result = 18;
            result = update[result];
            result = echoed.bind(option)(result);
            output = output.id;
            result = result.bind(option)(offset, output);
            echoed = verify != result;
            output = undefined;
            if(!echoed) { _fun00002_ip = 1171; continue _fun00001 }
 1168:
            output = result;
 1171:
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
            kiloes = output;
            michal = entity;
 1231:
            entity = verify != kiloes;
            echoed = undefined;
            if(!entity) { _fun00002_ip = 1243; continue _fun00001 }
 1240:
            echoed = kiloes;
 1243:
            entity = {};
            entity['footerLabel'] = oscard;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            output = 17;
            output = golfie[output];
            result = oscard.bind(option)(output);
            output = result.getAppGradientColors;
            output = output.bind(result)(echoed);
            entity['gradientColors'] = output;
            entity['headerText'] = sizing;
            entity['iconSrc'] = kiloes;
            backup = !backup;
            entity['isActive'] = backup;
            entity['isSpotifyParty'] = foxtra;
            entity['maxPartySize'] = romeon;
            entity['partyMemberAvatarURIs'] = yankee;
            entity['partySizeText'] = report;
            report = 19;
            report = golfie[report];
            golfie = oscard.bind(option)(report);
            oscard = golfie.getJoinFromSupportedPlatformsIconKeys;
            report = {};
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00002_ip = 1365; continue _fun00001 }
 1359:
            verify = offset.supported_platforms;
 1365:
            report['platforms'] = verify;
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