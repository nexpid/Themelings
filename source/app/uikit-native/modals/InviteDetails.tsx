// app/uikit-native/modals/InviteDetails.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: InviteDestinationIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtra = entity.invite;
            entity = _closure1_slot13;
            tangon = undefined;
            backup = entity.bind(tangon)();
            zuuluu = _closure1_slot10;
            michal = _closure1_slot5;
            entity = {};
            oscard = backup.avatarContainer;
            report = new Array(1);
            report[0] = oscard;
            entity['style'] = report;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 12;
            report = golfie[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.isGroupDMInvite;
            report = report.bind(oscard)(foxtra);
            if(!report) { _fun00002_ip = 96; continue _fun00001 }
 84:
            report = foxtra.inviter;
            oscard = null;
            if(!(oscard == report)) { _fun00002_ip = 199; continue _fun00001 }
 96:
            golfie = foxtra.guild;
            report = null;
            golfie = report != golfie;
            if(!golfie) { _fun00002_ip = 194; continue _fun00001 }
 110:
            verify = _closure1_slot10;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            offset = 14;
            golfie = kiloes[offset];
            option = romeon.bind(tangon)(golfie);
            golfie = {};
            sizing = backup.avatar;
            golfie['style'] = sizing;
            sizing = foxtra.guild;
            golfie['guild'] = sizing;
            offset = kiloes[offset];
            offset = romeon.bind(tangon)(offset);
            offset = offset.Sizes;
            offset = offset.LARGE;
            golfie['size'] = offset;
            offset = 2;
            golfie['textScale'] = offset;
            report = verify.bind(tangon)(option, golfie);
 194:
            _fun00002_ip = 327; continue _fun00001;
 199:
            golfie = foxtra.inviter;
            golfie = oscard != golfie;
            oscard = null;
            if(!golfie) { _fun00002_ip = 324; continue _fun00001 }
 214:
            verify = _closure1_slot10;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 13;
            golfie = romeon[offset];
            option = option.bind(tangon)(golfie);
            golfie = {};
            backup = backup.avatar;
            golfie['avatarStyle'] = backup;
            kiloes = _closure1_slot6;
            result = foxtra.inviter;
            backup = kiloes.prototype;
            backup = Object.create(backup, {constructor: {value: kiloes}});
            echoed = backup;
            foxtra = new echoed[kiloes](result, output);
            foxtra = foxtra instanceof Object ? foxtra : backup;
            golfie['user'] = foxtra;
            golfie['guildId'] = tangon;
            yankee = _closure1_slot0;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            offset = offset.AvatarSizes;
            offset = offset.XLARGE;
            golfie['size'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 324:
            report = oscard;
 327:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: InviteHeader
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            foxtra = entity.invite;
            entity = _closure1_slot13;
            report = undefined;
            yankee = entity.bind(report)();
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 12;
            entity = entity[zuuluu];
            michal = michal.bind(report)(entity);
            entity = michal.isGroupDMInvite;
            entity = entity.bind(michal)(foxtra);
            if(entity) { _fun00004_ip = 79; continue _fun00003 }
 56:
            entity = foxtra.guild;
            michal = null;
            michal = michal == entity;
            offset = undefined;
            if(michal) { _fun00004_ip = 77; continue _fun00003 }
 72:
            offset = entity.name;
 77:
            _fun00004_ip = 144; continue _fun00003;
 79:
            tangon = foxtra.channel;
            michal = null;
            oscard = michal == tangon;
            entity = undefined;
            if(oscard) { _fun00004_ip = 100; continue _fun00003 }
 95:
            entity = tangon.name;
 100:
            if(!(michal == entity)) { _fun00004_ip = 141; continue _fun00003 }
 104:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 15;
            michal = oscard[michal];
            oscard = tangon.bind(report)(michal);
            tangon = oscard.getFormattedName;
            michal = foxtra.inviter;
            entity = tangon.bind(oscard)(michal);
 141:
            offset = entity;
 144:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[zuuluu];
            michal = michal.bind(report)(entity);
            entity = michal.isFriendInvite;
            entity = entity.bind(michal)(foxtra);
            if(!entity) { _fun00004_ip = 272; continue _fun00003 }
 175:
            michal = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 16;
            zuuluu = verify[entity];
            zuuluu = michal.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = verify[entity];
            entity = michal.bind(report)(entity);
            entity = entity.t;
            michal = entity.4aF92d;
            entity = {};
            option = _closure1_slot1;
            oscard = 15;
            oscard = verify[oscard];
            verify = option.bind(report)(oscard);
            option = verify.getFormattedName;
            oscard = foxtra.inviter;
            oscard = option.bind(verify)(oscard);
            entity['username'] = oscard;
            offset = zuuluu.bind(tangon)(michal, entity);
 272:
            entity = null;
            michal = entity == offset;
            if(michal) { _fun00004_ip = 441; continue _fun00003 }
 284:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = yankee.guildNameContainer;
            michal['style'] = oscard;
            verify = _closure1_slot10;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            oscard = 17;
            oscard = romeon[oscard];
            option = option.bind(report)(oscard);
            oscard = {};
            foxtra = foxtra.guild;
            oscard['guild'] = foxtra;
            foxtra = yankee.featureIcon;
            oscard['style'] = foxtra;
            foxtra = true;
            oscard['disableColor'] = foxtra;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot10;
            option = _closure1_slot0;
            golfie = 18;
            golfie = romeon[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.Text;
            golfie = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            yankee = yankee.guildNameText;
            golfie['style'] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 441:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: InviteJoinContext
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            romeon = michal.invite;
            var _closure2_slot0 = romeon;
            zuuluu = michal.isRegistration;
            option = michal.isGuildMember;
            var _closure2_slot1 = option;
            michal = _closure1_slot13;
            tangon = undefined;
            offset = michal.bind(tangon)();
            golfie = _closure1_slot4;
            report = golfie.useMemo;
            michal = new Array(2);
            michal[0] = romeon;
            michal[1] = option;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 12;
                    entity = tangon[entity];
                    report = undefined;
                    oscard = michal.bind(report)(entity);
                    tangon = oscard.isStreamInvite;
                    entity = _closure2_slot0;
                    entity = tangon.bind(oscard)(entity);
                    if(!entity) { _fun00008_ip = 62; continue _fun00007 }
 46:
                    entity = _closure2_slot0;
                    tangon = entity.target_user;
                    entity = null;
                    if(!(entity == tangon)) { _fun00008_ip = 149; continue _fun00007 }
 62:
                    oscard = _closure1_slot16;
                    tangon = _closure2_slot0;
                    entity = _closure2_slot1;
                    tangon = oscard.bind(report)(tangon, entity);
                    oscard = null;
                    entity = null;
                    if(!tangon) { _fun00008_ip = 147; continue _fun00007 }
 87:
                    tangon = _closure2_slot0;
                    tangon = tangon.inviter;
                    tangon = oscard != tangon;
                    entity = null;
                    if(!tangon) { _fun00008_ip = 147; continue _fun00007 }
 106:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 19;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(report)(tangon);
                    oscard = golfie.getUserAvatarSource;
                    tangon = _closure2_slot0;
                    tangon = tangon.inviter;
                    entity = oscard.bind(golfie)(tangon);
 147:
                    _fun00008_ip = 190; continue _fun00007;
 149:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 19;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.getUserAvatarSource;
                    michal = _closure2_slot0;
                    michal = michal.target_user;
                    entity = zuuluu.bind(tangon)(michal);
 190:
                    return entity;
                }
            };
            kiloes = report.bind(golfie)(entity, michal);
            report = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            golfie = michal[entity];
            golfie = report.bind(tangon)(golfie);
            yankee = golfie.intl;
            verify = yankee.string;
            golfie = michal[entity];
            golfie = report.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.3rE1Pz;
            golfie = verify.bind(yankee)(golfie);
            foxtra = 12;
            michal = michal[foxtra];
            report = report.bind(tangon)(michal);
            michal = report.isFriendInvite;
            report = michal.bind(report)(romeon);
            michal = _closure1_slot0;
            yankee = _closure1_slot2;
            if(report) { _fun00006_ip = 744; continue _fun00005 }
 170:
            report = yankee[foxtra];
            verify = michal.bind(tangon)(report);
            report = verify.isGroupDMInvite;
            report = report.bind(verify)(romeon);
            if(report) { _fun00006_ip = 570; continue _fun00005 }
 196:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[foxtra];
            verify = verify.bind(tangon)(report);
            report = verify.isStreamInvite;
            report = report.bind(verify)(romeon);
            if(!report) { _fun00006_ip = 242; continue _fun00005 }
 227:
            verify = romeon.target_user;
            report = null;
            if(!(report == verify)) { _fun00006_ip = 471; continue _fun00005 }
 242:
            report = _closure1_slot15;
            report = report.bind(tangon)(romeon, option);
            if(report) { _fun00006_ip = 391; continue _fun00005 }
 258:
            report = _closure1_slot16;
            report = report.bind(tangon)(romeon, option);
            if(!report) { _fun00006_ip = 283; continue _fun00005 }
 271:
            verify = romeon.inviter;
            option = null;
            report = option != verify;
 283:
            verify = golfie;
            if(!report) { _fun00006_ip = 830; continue _fun00005 }
 292:
            golfie = _closure1_slot0;
            result = _closure1_slot2;
            report = result[entity];
            report = golfie.bind(tangon)(report);
            backup = report.intl;
            option = backup.format;
            report = result[entity];
            report = golfie.bind(tangon)(report);
            report = report.t;
            golfie = report.spU2mJ;
            report = {};
            output = _closure1_slot1;
            sizing = 15;
            sizing = result[sizing];
            result = output.bind(tangon)(sizing);
            output = result.getFormattedName;
            sizing = romeon.inviter;
            sizing = output.bind(result)(sizing);
            report['username'] = sizing;
            verify = option.bind(backup)(golfie, report);
            _fun00006_ip = 830; continue _fun00005;
 391:
            backup = _closure1_slot0;
            report = _closure1_slot2;
            golfie = report[entity];
            golfie = backup.bind(tangon)(golfie);
            option = golfie.intl;
            golfie = option.string;
            report = report[entity];
            report = backup.bind(tangon)(report);
            report = report.t;
            if(zuuluu) { _fun00006_ip = 450; continue _fun00005 }
 435:
            zuuluu = report.FDsl+P;
            zuuluu = golfie.bind(option)(zuuluu);
            _fun00006_ip = 463; continue _fun00005;
 450:
            report = report.jpwYbm;
            zuuluu = golfie.bind(option)(report);
 463:
            verify = zuuluu;
            _fun00006_ip = 830; continue _fun00005;
 471:
            report = _closure1_slot0;
            output = _closure1_slot2;
            zuuluu = output[entity];
            zuuluu = report.bind(tangon)(zuuluu);
            option = zuuluu.intl;
            golfie = option.formatToPlainString;
            zuuluu = output[entity];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.x2L32d;
            zuuluu = {};
            sizing = _closure1_slot1;
            backup = 15;
            backup = output[backup];
            output = sizing.bind(tangon)(backup);
            sizing = output.getFormattedName;
            backup = romeon.target_user;
            backup = sizing.bind(output)(backup);
            zuuluu['username'] = backup;
            verify = golfie.bind(option)(report, zuuluu);
            _fun00006_ip = 830; continue _fun00005;
 570:
            zuuluu = romeon.channel;
            report = null;
            if(!(report != zuuluu)) { _fun00006_ip = 591; continue _fun00005 }
 581:
            zuuluu = romeon.inviter;
            if(!(report == zuuluu)) { _fun00006_ip = 645; continue _fun00005 }
 591:
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = zuuluu[entity];
            report = option.bind(tangon)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = zuuluu[entity];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.OsdY8P;
            zuuluu = report.bind(golfie)(zuuluu);
            _fun00006_ip = 739; continue _fun00005;
 645:
            golfie = _closure1_slot0;
            result = _closure1_slot2;
            report = result[entity];
            report = golfie.bind(tangon)(report);
            backup = report.intl;
            option = backup.format;
            report = result[entity];
            report = golfie.bind(tangon)(report);
            report = report.t;
            golfie = report.Lu4h19;
            report = {};
            output = _closure1_slot1;
            sizing = 15;
            sizing = result[sizing];
            result = output.bind(tangon)(sizing);
            output = result.getFormattedName;
            sizing = romeon.inviter;
            sizing = output.bind(result)(sizing);
            report['username'] = sizing;
            zuuluu = option.bind(backup)(golfie, report);
 739:
            verify = zuuluu;
            _fun00006_ip = 830; continue _fun00005;
 744:
            zuuluu = yankee[entity];
            zuuluu = michal.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.format;
            entity = yankee[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.Quj7HR;
            entity = {};
            option = _closure1_slot1;
            golfie = 15;
            golfie = yankee[golfie];
            yankee = option.bind(tangon)(golfie);
            option = yankee.getFormattedName;
            golfie = romeon.inviter;
            golfie = option.bind(yankee)(golfie);
            entity['username'] = golfie;
            verify = zuuluu.bind(report)(michal, entity);
 830:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot5;
            entity = {};
            report = offset.inviteJoinContainer;
            entity['style'] = report;
            option = null;
            report = option == kiloes;
            golfie = null;
            if(report) { _fun00006_ip = 970; continue _fun00005 }
 861:
            yankee = _closure1_slot0;
            report = _closure1_slot2;
            report = report[foxtra];
            yankee = yankee.bind(tangon)(report);
            report = yankee.isFriendInvite;
            report = report.bind(yankee)(romeon);
            golfie = null;
            if(report) { _fun00006_ip = 970; continue _fun00005 }
 894:
            yankee = _closure1_slot10;
            option = _closure1_slot5;
            report = {};
            romeon = offset.inviterIconWrapper;
            report['style'] = romeon;
            backup = _closure1_slot10;
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            romeon = 20;
            romeon = sizing[romeon];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = {};
            romeon['source'] = kiloes;
            kiloes = offset.inviterIcon;
            romeon['style'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            report['children'] = romeon;
            golfie = yankee.bind(tangon)(option, report);
 970:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot10;
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 18;
            oscard = yankee[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'variant': 'text-sm/normal', 'color': 'header-secondary'};
            offset = offset.inviteJoinText;
            oscard['style'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: InviteMemberCounts
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.invite;
            tangon = entity.isGuildMember;
            entity = _closure1_slot13;
            report = undefined;
            kiloes = entity.bind(report)();
            entity = _closure1_slot14;
            echoed = entity.bind(report)(michal);
            golfie = null;
            zuuluu = golfie == echoed;
            entity = null;
            if(zuuluu) { _fun00010_ip = 531; continue _fun00009 }
 51:
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.bind(report)(michal, tangon);
            entity = null;
            if(zuuluu) { _fun00010_ip = 531; continue _fun00009 }
 69:
            tangon = golfie == michal;
            zuuluu = undefined;
            if(tangon) { _fun00010_ip = 97; continue _fun00009 }
 78:
            michal = michal.guild;
            tangon = golfie == michal;
            zuuluu = undefined;
            if(tangon) { _fun00010_ip = 97; continue _fun00009 }
 92:
            zuuluu = michal.id;
 97:
            michal = _closure1_slot9;
            entity = null;
            if(!(zuuluu !== michal)) { _fun00010_ip = 531; continue _fun00009 }
 110:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = kiloes.memberInfo;
            michal['style'] = oscard;
            oscard = echoed.onlineCount;
            oscard = golfie != oscard;
            option = null;
            if(!oscard) { _fun00010_ip = 320; continue _fun00009 }
 148:
            offset = _closure1_slot11;
            verify = _closure1_slot12;
            oscard = {};
            backup = _closure1_slot10;
            foxtra = _closure1_slot5;
            yankee = {};
            sizing = kiloes.dotOnline;
            yankee['style'] = sizing;
            foxtra = backup.bind(report)(foxtra, yankee);
            yankee = new Array(2);
            yankee[0] = foxtra;
            sizing = _closure1_slot10;
            result = _closure1_slot0;
            ctrled = _closure1_slot2;
            foxtra = 18;
            foxtra = ctrled[foxtra];
            foxtra = result.bind(report)(foxtra);
            backup = foxtra.Text;
            foxtra = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            output = 16;
            update = ctrled[output];
            update = result.bind(report)(update);
            source = update.intl;
            update = source.format;
            output = ctrled[output];
            output = result.bind(report)(output);
            output = output.t;
            result = output.LC+S+v;
            output = {};
            ctrled = echoed.onlineCount;
            output['membersOnline'] = ctrled;
            output = update.bind(source)(result, output);
            foxtra['children'] = output;
            foxtra = sizing.bind(report)(backup, foxtra);
            yankee[1] = foxtra;
            oscard['children'] = yankee;
            option = offset.bind(report)(verify, oscard);
 320:
            oscard = new Array(2);
            oscard[0] = option;
            option = echoed.memberCount;
            option = golfie != option;
            golfie = null;
            if(!option) { _fun00010_ip = 517; continue _fun00009 }
 346:
            offset = _closure1_slot11;
            verify = _closure1_slot12;
            option = {};
            backup = _closure1_slot10;
            foxtra = _closure1_slot5;
            yankee = {};
            kiloes = kiloes.dotOffline;
            yankee['style'] = kiloes;
            foxtra = backup.bind(report)(foxtra, yankee);
            yankee = new Array(2);
            yankee[0] = foxtra;
            backup = _closure1_slot10;
            sizing = _closure1_slot0;
            update = _closure1_slot2;
            romeon = 18;
            romeon = update[romeon];
            romeon = sizing.bind(report)(romeon);
            foxtra = romeon.Text;
            romeon = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            kiloes = 16;
            output = update[kiloes];
            output = sizing.bind(report)(output);
            result = output.intl;
            output = result.format;
            kiloes = update[kiloes];
            kiloes = sizing.bind(report)(kiloes);
            kiloes = kiloes.t;
            sizing = kiloes.zRl6XV;
            kiloes = {};
            echoed = echoed.memberCount;
            kiloes['count'] = echoed;
            kiloes = output.bind(result)(sizing, kiloes);
            romeon['children'] = kiloes;
            romeon = backup.bind(report)(foxtra, romeon);
            yankee[1] = romeon;
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 517:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 531:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: InviteUsername
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            offset = entity.currentUser;
            foxtra = entity.style;
            entity = _closure1_slot13;
            tangon = undefined;
            romeon = entity.bind(tangon)();
            zuuluu = _closure1_slot11;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 18;
            entity = kiloes[yankee];
            entity = backup.bind(tangon)(entity);
            michal = entity.Text;
            entity = {};
            report = 'text-sm/semibold';
            entity['variant'] = report;
            report = new Array(2);
            report[0] = foxtra;
            oscard = romeon.inviteUsername;
            report[1] = oscard;
            entity['style'] = report;
            option = _closure1_slot10;
            oscard = _closure1_slot1;
            verify = 13;
            report = kiloes[verify];
            oscard = oscard.bind(tangon)(report);
            report = {};
            sizing = romeon.inviteAvatar;
            report['style'] = sizing;
            report['user'] = offset;
            verify = kiloes[verify];
            verify = backup.bind(tangon)(verify);
            verify = verify.AvatarSizes;
            verify = verify.SIZE_16;
            report['size'] = verify;
            report['guildId'] = tangon;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(3);
            report[0] = oscard;
            oscard = offset.username;
            report[1] = oscard;
            oscard = offset.isPomelo;
            oscard = oscard.bind(offset)();
            oscard = !oscard;
            if(!oscard) { _fun00012_ip = 282; continue _fun00011 }
 192:
            verify = _closure1_slot11;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[yankee];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {};
            yankee = 'text-sm/normal';
            golfie['variant'] = yankee;
            yankee = new Array(2);
            yankee[0] = foxtra;
            romeon = romeon.inviteDiscriminatorText;
            yankee[1] = romeon;
            golfie['style'] = yankee;
            yankee = offset.discriminator;
            offset = ['#'];
            offset[1] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 282:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: InviteButtonText
        entity = argFoo;
        option = entity.style;
        var _closure2_slot0 = option;
        entity = entity.currentUser;
        var _closure2_slot1 = entity;
        michal = _closure1_slot13;
        tangon = undefined;
        golfie = michal.bind(tangon)();
        zuuluu = _closure1_slot10;
        oscard = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 18;
        entity = offset[entity];
        entity = oscard.bind(tangon)(entity);
        michal = entity.Text;
        entity = {'variant': 'text-sm/semibold', 'style': null, 'lineClamp': 1};
        report = new Array(2);
        report[0] = option;
        golfie = golfie.inviteAcceptText;
        report[1] = golfie;
        entity['style'] = report;
        report = 16;
        golfie = offset[report];
        golfie = oscard.bind(tangon)(golfie);
        option = golfie.intl;
        golfie = option.format;
        report = offset[report];
        report = oscard.bind(tangon)(report);
        report = report.t;
        oscard = report.9sWQNT;
        report = {};
        verify = function(argFoo, argBar) { // Original name: usernameHook
            report = _closure1_slot10;
            tangon = _closure1_slot22;
            zuuluu = {};
            michal = _closure2_slot0;
            zuuluu['style'] = michal;
            entity = _closure2_slot1;
            zuuluu['currentUser'] = entity;
            michal = undefined;
            entity = argBar;
            entity = report.bind(michal)(tangon, zuuluu, entity);
            return entity;
        };
        report['usernameHook'] = verify;
        report = golfie.bind(option)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    verify = 0;
    tangon = oscard[verify];
    entity = undefined;
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    option = 1;
    golfie = oscard[option];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.InviteStates;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.INVITE_ROUTING_HUB_GUILD_ID;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    output = tangon.Fonts;
    sizing = 8;
    tangon = oscard[sizing];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot10 = golfie;
    golfie = tangon.jsxs;
    var _closure1_slot11 = golfie;
    tangon = tangon.Fragment;
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    golfie = offset.createStyles;
    tangon = {};
    yankee = {'height': 64, 'width': 64, 'margin': 0};
    romeon = 10;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    yankee['borderRadius'] = backup;
    tangon['avatar'] = yankee;
    yankee = {'borderRadius': null, 'height': 64, 'width': 64, 'marginBottom': 24, 'marginTop': 24};
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.none;
    yankee['borderRadius'] = backup;
    tangon['avatarContainer'] = yankee;
    kiloes = 'center';
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    tangon['inviteJoinContainer'] = yankee;
    yankee = {};
    yankee['textAlign'] = kiloes;
    tangon['inviteJoinText'] = yankee;
    yankee = {'display': 'flex', 'flexDirection': 'row'};
    tangon['inviteUsername'] = yankee;
    backup = 11;
    yankee = {'justifyContent': 'center', 'marginHorizontal': 11};
    tangon['inviteAcceptText'] = yankee;
    yankee = {};
    output = output.PRIMARY_NORMAL;
    yankee['fontFamily'] = output;
    tangon['inviteDiscriminatorText'] = yankee;
    yankee = {'alignSelf': 'center', 'paddingTop': 2, 'marginRight': 4};
    tangon['inviteAvatar'] = yankee;
    yankee = {};
    output = oscard[romeon];
    output = foxtra.bind(entity)(output);
    output = output.radii;
    output = output.none;
    yankee['borderRadius'] = output;
    yankee['marginRight'] = sizing;
    tangon['inviterIconWrapper'] = yankee;
    yankee = {'width': 20, 'height': 20};
    sizing = oscard[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.md;
    yankee['borderRadius'] = sizing;
    tangon['inviterIcon'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    tangon['guildNameContainer'] = yankee;
    yankee = {};
    yankee['textAlign'] = kiloes;
    tangon['guildNameText'] = yankee;
    yankee = {'flexGrow': 0, 'marginRight': 8};
    backup = oscard[backup];
    backup = report.bind(entity)(backup);
    backup = backup.DARK_1_LIGHT_04;
    yankee['opacity'] = backup;
    tangon['featureIcon'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    tangon['memberInfo'] = yankee;
    yankee = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    yankee['borderRadius'] = backup;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.GREEN_360;
    yankee['backgroundColor'] = backup;
    tangon['dotOnline'] = yankee;
    yankee = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4, 'marginLeft': 16};
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    yankee['borderRadius'] = backup;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.PRIMARY_400;
    yankee['backgroundColor'] = backup;
    tangon['dotOffline'] = yankee;
    yankee = {'flex': 1, 'marginTop': 8, 'width': '100%'};
    tangon['button'] = yankee;
    yankee = {'width': '100%', 'backgroundColor': null, 'padding': 16, 'borderRadius': null, 'marginTop': 16, 'marginBottom': 8};
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_FLOATING;
    yankee['backgroundColor'] = backup;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    yankee['borderRadius'] = romeon;
    tangon['embedDetailsCard'] = yankee;
    tangon = golfie.bind(offset)(tangon);
    var _closure1_slot13 = tangon;
    tangon = function(argFoo) { // Original name: getMemberCountFromInvite
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            michal = {};
            oscard = zuuluu.approximate_presence_count;
            entity = null;
            golfie = entity != oscard;
            tangon = 0;
            report = 0;
            if(!golfie) { _fun00014_ip = 27; continue _fun00013 }
 24:
            report = oscard;
 27:
            michal['onlineCount'] = report;
            report = zuuluu.approximate_member_count;
            oscard = entity != report;
            zuuluu = 0;
            if(!oscard) { _fun00014_ip = 50; continue _fun00013 }
 47:
            zuuluu = report;
 50:
            michal['memberCount'] = zuuluu;
            zuuluu = michal.memberCount;
            if(!(tangon === zuuluu)) { _fun00014_ip = 77; continue _fun00013 }
 65:
            zuuluu = michal.memberCount;
            entity = null;
            if(!(tangon !== zuuluu)) { _fun00014_ip = 80; continue _fun00013 }
 77:
            entity = michal;
 80:
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    tangon = function(argFoo, argBar) { // Original name: isAlreadyMember
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argBar;
            if(!entity) { _fun00016_ip = 31; continue _fun00015 }
 6:
            michal = argFoo;
            zuuluu = michal.state;
            michal = _closure1_slot8;
            michal = michal.ACCEPTED;
            entity = zuuluu !== michal;
 31:
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    tangon = function(argFoo, argBar) { // Original name: shouldShowInviter
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            entity = report.inviter;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00018_ip = 39; continue _fun00017 }
 18:
            oscard = _closure1_slot15;
            tangon = undefined;
            michal = argBar;
            michal = oscard.bind(tangon)(report, michal);
            entity = !michal;
 39:
            if(!entity) { _fun00018_ip = 91; continue _fun00017 }
 42:
            tangon = _closure1_slot14;
            michal = undefined;
            tangon = tangon.bind(michal)(report);
            report = zuuluu == tangon;
            if(report) { _fun00018_ip = 69; continue _fun00017 }
 63:
            michal = tangon.memberCount;
 69:
            tangon = zuuluu != michal;
            zuuluu = 0;
            if(!tangon) { _fun00018_ip = 81; continue _fun00017 }
 78:
            zuuluu = michal;
 81:
            michal = 100;
            michal = zuuluu > michal;
            entity = !michal;
 91:
            return entity;
        }
    };
    var _closure1_slot16 = tangon;
    tangon = {};
    tangon['ACCEPT'] = verify;
    golfie = 'ACCEPT';
    tangon[verify] = golfie;
    tangon['DECLINE'] = option;
    golfie = 'DECLINE';
    tangon[option] = golfie;
    var _closure1_slot17 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'uikit-native/modals/InviteDetails.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: InviteDetails
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            output = entity.invite;
            michal = entity.isGuildMember;
            zuuluu = entity.onPressJoin;
            var _closure2_slot0 = zuuluu;
            zuuluu = entity.onPressClose;
            var _closure2_slot1 = zuuluu;
            entity = entity.isRegistration;
            zuuluu = _closure1_slot13;
            tangon = undefined;
            foxtra = zuuluu.bind(tangon)();
            report = _closure1_slot4;
            zuuluu = report.useState;
            oscard = zuuluu.bind(report)();
            report = _closure1_slot3;
            zuuluu = 2;
            report = report.bind(tangon)(oscard, zuuluu);
            zuuluu = 0;
            backup = report[zuuluu];
            zuuluu = 1;
            zuuluu = report[zuuluu];
            var _closure2_slot2 = zuuluu;
            result = {};
            result['invite'] = output;
            result['isGuildMember'] = michal;
            result['isRegistration'] = entity;
            entity = output.stage_instance;
            oscard = null;
            option = oscard != entity;
            vacuum = output.guild_scheduled_event;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 21;
            entity = zuuluu[entity];
            verify = michal.bind(tangon)(entity);
            golfie = verify.useStateFromStores;
            entity = _closure1_slot7;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = golfie.bind(verify)(report, entity);
            entity = 22;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useMultiAccountMobile;
            golfie = entity.bind(michal)();
            zuuluu = _closure1_slot11;
            michal = _closure1_slot12;
            entity = {};
            offset = _closure1_slot10;
            verify = _closure1_slot18;
            report = {};
            status = report;
            target = result;
            romeon = copyDataProperties(status, target);
            verify = offset.bind(tangon)(verify, report);
            report = new Array(7);
            report[0] = verify;
            romeon = _closure1_slot10;
            offset = _closure1_slot20;
            verify = {};
            status = verify;
            target = result;
            echoed = copyDataProperties(status, target);
            verify = romeon.bind(tangon)(offset, verify);
            report[1] = verify;
            romeon = _closure1_slot10;
            offset = _closure1_slot19;
            verify = {};
            status = verify;
            target = result;
            echoed = copyDataProperties(status, target);
            verify = romeon.bind(tangon)(offset, verify);
            report[2] = verify;
            romeon = _closure1_slot10;
            offset = _closure1_slot21;
            verify = {};
            status = verify;
            target = result;
            result = copyDataProperties(status, target);
            verify = romeon.bind(tangon)(offset, verify);
            report[3] = verify;
            verify = oscard != vacuum;
            if(!verify) { _fun00020_ip = 503; continue _fun00019 }
 350:
            result = _closure1_slot11;
            romeon = _closure1_slot5;
            offset = {};
            echoed = foxtra.embedDetailsCard;
            offset['style'] = echoed;
            config = _closure1_slot10;
            source = _closure1_slot0;
            sequen = _closure1_slot2;
            update = 23;
            echoed = sequen[update];
            echoed = source.bind(tangon)(echoed);
            ctrled = echoed.GuildEventCardHeader;
            echoed = {};
            echoed['event'] = vacuum;
            ctrled = config.bind(tangon)(ctrled, echoed);
            echoed = new Array(3);
            echoed[0] = ctrled;
            record = _closure1_slot10;
            ctrled = sequen[update];
            ctrled = source.bind(tangon)(ctrled);
            config = ctrled.GuildEventCardMetaInfo;
            ctrled = {};
            ctrled['event'] = vacuum;
            ctrled = record.bind(tangon)(config, ctrled);
            echoed[1] = ctrled;
            ctrled = _closure1_slot10;
            update = sequen[update];
            update = source.bind(tangon)(update);
            source = update.GuildEventCardGuildInfo;
            update = {};
            update['event'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            echoed[2] = update;
            offset['children'] = echoed;
            verify = result.bind(tangon)(romeon, offset);
 503:
            report[4] = verify;
            if(!option) { _fun00020_ip = 542; continue _fun00019 }
 510:
            offset = oscard == output;
            verify = undefined;
            if(offset) { _fun00020_ip = 538; continue _fun00019 }
 519:
            offset = output.channel;
            romeon = oscard == offset;
            verify = undefined;
            if(romeon) { _fun00020_ip = 538; continue _fun00019 }
 533:
            verify = offset.id;
 538:
            option = oscard != verify;
 542:
            if(!option) { _fun00020_ip = 622; continue _fun00019 }
 545:
            romeon = _closure1_slot10;
            offset = _closure1_slot1;
            result = _closure1_slot2;
            verify = 24;
            verify = result[verify];
            offset = offset.bind(tangon)(verify);
            verify = {};
            result = output.stage_instance;
            verify['stageInstance'] = result;
            result = output.guild;
            verify['guild'] = result;
            output = output.channel;
            output = output.id;
            verify['channelId'] = output;
            foxtra = foxtra.embedDetailsCard;
            verify['containerStyle'] = foxtra;
            option = romeon.bind(tangon)(offset, verify);
 622:
            report[5] = option;
            option = {};
            option['isMultiAccountMobileEnabled'] = golfie;
            option['currentUser'] = sizing;
            golfie = true;
            option['redesignEnabled'] = golfie;
            golfie = function(argFoo) { // Original name: renderInviteButtonText
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = argFoo;
                    entity = michal.isMultiAccountMobileEnabled;
                    zuuluu = michal.currentUser;
                    var _closure3_slot0 = zuuluu;
                    michal = michal.redesignEnabled;
                    if(!entity) { _fun00022_ip = 36; continue _fun00021 }
 30:
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00022_ip = 100; continue _fun00021 }
 36:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 16;
                    zuuluu = option[entity];
                    report = undefined;
                    zuuluu = oscard.bind(report)(zuuluu);
                    tangon = zuuluu.intl;
                    zuuluu = tangon.string;
                    entity = option[entity];
                    entity = oscard.bind(report)(entity);
                    entity = entity.t;
                    entity = entity.e/6Ogo;
                    entity = zuuluu.bind(tangon)(entity);
                    _fun00022_ip = 190; continue _fun00021;
 100:
                    if(michal) { _fun00022_ip = 112; continue _fun00021 }
 103:
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.style;
                        tangon = _closure1_slot10;
                        zuuluu = _closure1_slot23;
                        michal = {};
                        report = _closure3_slot0;
                        michal['currentUser'] = report;
                        michal['style'] = entity;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    _fun00022_ip = 187; continue _fun00021;
 112:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 16;
                    report = verify[zuuluu];
                    tangon = undefined;
                    report = option.bind(tangon)(report);
                    oscard = report.intl;
                    report = oscard.formatToPlainString;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.t;
                    tangon = zuuluu.9sWQNT;
                    zuuluu = {};
                    golfie = function() { // Original name: usernameHook
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            tangon = zuuluu.username;
                            michal = zuuluu.isPomelo;
                            report = michal.bind(zuuluu)();
                            zuuluu = '';
                            michal = zuuluu;
                            if(report) { _fun00024_ip = 64; continue _fun00023 }
 32:
                            entity = _closure3_slot0;
                            oscard = entity.discriminator;
                            entity = global;
                            entity = entity.HermesInternal;
                            report = entity.concat;
                            entity = '#';
                            michal = report.bind(entity)(oscard);
 64:
                            entity = global;
                            entity = entity.HermesInternal;
                            entity = entity.concat;
                            entity = entity.bind(zuuluu)(tangon, michal);
                            return entity;
                        }
                    };
                    zuuluu['usernameHook'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu);
 187:
                    entity = michal;
 190:
                    return entity;
                }
            };
            foxtra = golfie.bind(tangon)(option);
            golfie = oscard != sizing;
            verify = null;
            if(!golfie) { _fun00020_ip = 704; continue _fun00019 }
 666:
            option = _closure1_slot1;
            offset = _closure1_slot2;
            golfie = 19;
            golfie = offset[golfie];
            romeon = option.bind(tangon)(golfie);
            offset = romeon.getUserAvatarSource;
            option = false;
            golfie = 20;
            verify = offset.bind(romeon)(sizing, option, golfie);
 704:
            oscard = oscard != verify;
            output = undefined;
            if(!oscard) { _fun00020_ip = 771; continue _fun00019 }
 713:
            option = _closure1_slot10;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 25;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.Button;
            golfie = oscard.Icon;
            oscard = {};
            oscard['source'] = verify;
            verify = 'entity';
            oscard['variant'] = verify;
            output = option.bind(tangon)(golfie, oscard);
 771:
            option = _closure1_slot11;
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            oscard = 26;
            oscard = update[oscard];
            oscard = echoed.bind(tangon)(oscard);
            golfie = oscard.ButtonGroup;
            oscard = {};
            sizing = _closure1_slot10;
            offset = 25;
            verify = update[offset];
            verify = echoed.bind(tangon)(verify);
            romeon = verify.Button;
            verify = {'icon': null, 'variant': 'primary', 'size': 'lg'};
            verify['icon'] = output;
            verify['text'] = foxtra;
            foxtra = function() { // Original name: handleAcceptInvitePress
                tangon = _closure2_slot2;
                entity = _closure1_slot17;
                zuuluu = entity.ACCEPT;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot0;
                michal = michal.bind(entity)();
                return entity;
            };
            verify['onPress'] = foxtra;
            foxtra = _closure1_slot17;
            output = foxtra.ACCEPT;
            output = backup === output;
            verify['loading'] = output;
            output = foxtra.ACCEPT;
            output = backup === output;
            verify['disabled'] = output;
            romeon = sizing.bind(tangon)(romeon, verify);
            verify = new Array(2);
            verify[0] = romeon;
            romeon = _closure1_slot10;
            offset = update[offset];
            offset = echoed.bind(tangon)(offset);
            yankee = offset.Button;
            offset = {'variant': 'secondary', 'size': 'lg'};
            sizing = 16;
            output = update[sizing];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            sizing = update[sizing];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.ndsK4e;
            sizing = output.bind(result)(sizing);
            offset['text'] = sizing;
            kiloes = function() { // Original name: handleCancelPress
                tangon = _closure2_slot2;
                entity = _closure1_slot17;
                zuuluu = entity.DECLINE;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot1;
                michal = michal.bind(entity)();
                return entity;
            };
            offset['onPress'] = kiloes;
            kiloes = foxtra.DECLINE;
            kiloes = backup === kiloes;
            offset['loading'] = kiloes;
            foxtra = foxtra.DECLINE;
            foxtra = backup === foxtra;
            offset['disabled'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[6] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();