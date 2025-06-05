// app/components_native/chat/ChatBeginningRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ThreadOwner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userId;
            var _closure2_slot0 = zuuluu;
            offset = entity.guildId;
            var _closure2_slot1 = offset;
            zuuluu = _closure1_slot44;
            tangon = undefined;
            kiloes = zuuluu.bind(tangon)();
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 39;
            oscard = golfie[zuuluu];
            yankee = report.bind(tangon)(oscard);
            verify = yankee.useStateFromStores;
            oscard = _closure1_slot24;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot24;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = verify.bind(yankee)(option, oscard);
            oscard = golfie[zuuluu];
            romeon = report.bind(tangon)(oscard);
            yankee = romeon.useStateFromStores;
            oscard = _closure1_slot19;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00004_ip = 43; continue _fun00003 }
 16:
                    report = _closure1_slot19;
                    tangon = report.getMember;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 43:
                    return entity;
                }
            };
            oscard = yankee.bind(romeon)(verify, oscard);
            zuuluu = golfie[zuuluu];
            golfie = report.bind(tangon)(zuuluu);
            report = golfie.useStateFromStores;
            verify = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            michal = function() {
                entity = _closure1_slot9;
                entity = entity.roleStyle;
                return entity;
            };
            romeon = report.bind(golfie)(zuuluu, michal);
            michal = null;
            report = michal == oscard;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 181; continue _fun00001 }
 175:
            zuuluu = oscard.nick;
 181:
            if(!(michal == zuuluu)) { _fun00002_ip = 216; continue _fun00001 }
 185:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            report = 40;
            report = verify[report];
            golfie = golfie.bind(tangon)(report);
            report = golfie.getName;
            zuuluu = report.bind(golfie)(option);
 216:
            golfie = michal != zuuluu;
            report = '???';
            if(!golfie) { _fun00002_ip = 232; continue _fun00001 }
 229:
            report = zuuluu;
 232:
            zuuluu = michal == oscard;
            golfie = undefined;
            if(zuuluu) { _fun00002_ip = 247; continue _fun00001 }
 241:
            golfie = oscard.colorString;
 247:
            option = michal != golfie;
            zuuluu = undefined;
            if(!option) { _fun00002_ip = 259; continue _fun00001 }
 256:
            zuuluu = golfie;
 259:
            option = michal == oscard;
            golfie = undefined;
            if(option) { _fun00002_ip = 274; continue _fun00001 }
 268:
            golfie = oscard.colorStrings;
 274:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 41;
            oscard = yankee[oscard];
            option = verify.bind(tangon)(oscard);
            oscard = option.useProcessColorStringsArray;
            option = oscard.bind(option)(golfie);
            oscard = 42;
            oscard = yankee[oscard];
            verify = verify.bind(tangon)(oscard);
            oscard = verify.useIsRoleStyleAndRoleColorsEligibleForERC;
            verify = oscard.bind(verify)(offset, romeon, option);
            oscard = 'username';
            sizing = golfie;
            if(!(oscard !== romeon)) { _fun00002_ip = 506; continue _fun00001 }
 344:
            offset = _closure1_slot43;
            golfie = _closure1_slot42;
            oscard = {};
            yankee = 'dot';
            romeon = yankee === romeon;
            if(!romeon) { _fun00002_ip = 369; continue _fun00001 }
 365:
            romeon = michal != zuuluu;
 369:
            if(!romeon) { _fun00002_ip = 429; continue _fun00001 }
 372:
            backup = _closure1_slot41;
            foxtra = _closure1_slot0;
            output = _closure1_slot2;
            yankee = 44;
            yankee = output[yankee];
            yankee = foxtra.bind(tangon)(yankee);
            foxtra = yankee.RoleDot;
            yankee = {};
            yankee['color'] = zuuluu;
            yankee['colors'] = sizing;
            kiloes = kiloes.threadCreatorRoleDot;
            yankee['containerStyles'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, yankee);
 429:
            yankee = new Array(2);
            yankee[0] = romeon;
            backup = _closure1_slot41;
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot2;
            romeon = 31;
            romeon = kiloes[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.Text;
            romeon = {'variant': 'text-md/semibold', 'color': 'header-secondary'};
            romeon['children'] = report;
            romeon = backup.bind(tangon)(foxtra, romeon);
            yankee[1] = romeon;
            oscard['children'] = yankee;
            oscard = offset.bind(tangon)(golfie, oscard);
            return oscard;
 506:
            michal = michal != zuuluu;
            oscard = undefined;
            if(!michal) { _fun00002_ip = 524; continue _fun00001 }
 515:
            michal = {};
            michal['color'] = zuuluu;
            oscard = michal;
 524:
            zuuluu = _closure1_slot41;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 31;
            entity = yankee[entity];
            entity = offset.bind(tangon)(entity);
            michal = entity.Text;
            entity = {};
            golfie = 43;
            golfie = yankee[golfie];
            offset = offset.bind(tangon)(golfie);
            golfie = offset.isFabric;
            golfie = golfie.bind(offset)();
            golfie = !golfie;
            entity['experimental_useNativeText'] = golfie;
            golfie = undefined;
            if(!verify) { _fun00002_ip = 593; continue _fun00001 }
 590:
            golfie = option;
 593:
            entity['gradientColors'] = golfie;
            entity['style'] = oscard;
            oscard = 'text-md/semibold';
            entity['variant'] = oscard;
            oscard = 'header-secondary';
            entity['color'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot56 = entity;
    entity = function(argFoo) { // Original name: DMSpamButton
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.channel;
            var _closure2_slot0 = michal;
            entity = zuuluu.user;
            tangon = zuuluu.showingSpamBanner;
            romeon = zuuluu.color;
            report = undefined;
            if(!(romeon === report)) { _fun00006_ip = 71; continue _fun00005 }
 36:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 65;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.Colors;
            romeon = oscard.RED;
 71:
            verify = zuuluu.text;
            if(!(verify === report)) { _fun00006_ip = 140; continue _fun00005 }
 80:
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 36;
            golfie = foxtra[oscard];
            golfie = yankee.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = foxtra[oscard];
            oscard = yankee.bind(report)(oscard);
            oscard = oscard.t;
            oscard = oscard.HHZmDg;
            verify = golfie.bind(option)(oscard);
 140:
            backup = zuuluu.style;
            yankee = zuuluu.renderIcon;
            var _closure2_slot1 = report;
            zuuluu = _closure1_slot44;
            sizing = zuuluu.bind(report)();
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 66;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(report)(zuuluu);
            oscard = golfie.useIsRelationshipTypeSpamReportable;
            zuuluu = entity.id;
            zuuluu = oscard.bind(golfie)(zuuluu);
            if(zuuluu) { _fun00006_ip = 211; continue _fun00005 }
 205:
            zuuluu = entity.bot;
 211:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 67;
            oscard = option[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.useLongestChannelMessageBeforeReply;
            michal = michal.id;
            entity = entity.id;
            michal = oscard.bind(golfie)(michal, entity);
            _closure2_slot1 = michal;
            output = null;
            entity = null;
            if(tangon) { _fun00006_ip = 432; continue _fun00005 }
 267:
            entity = null;
            if(!zuuluu) { _fun00006_ip = 432; continue _fun00005 }
 275:
            michal = output == michal;
            entity = null;
            if(michal) { _fun00006_ip = 432; continue _fun00005 }
 287:
            tangon = _closure1_slot41;
            zuuluu = _closure1_slot8;
            michal = {};
            oscard = sizing.buttonContainer;
            michal['style'] = oscard;
            option = _closure1_slot41;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            kiloes = 65;
            oscard = oscard[kiloes];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            if(!(output == backup)) { _fun00006_ip = 343; continue _fun00005 }
 337:
            backup = sizing.spamButton;
 343:
            oscard['style'] = backup;
            backup = _closure1_slot1;
            foxtra = _closure1_slot2;
            foxtra = foxtra[kiloes];
            foxtra = backup.bind(report)(foxtra);
            foxtra = foxtra.Sizes;
            foxtra = foxtra.XSMALL;
            oscard['size'] = foxtra;
            oscard['color'] = romeon;
            oscard['text'] = verify;
            verify = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 68;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.showReportModalForFirstDM;
                zuuluu = _closure2_slot1;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 69;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.closePrivateChannel;
                    michal = _closure2_slot0;
                    zuuluu = michal.id;
                    michal = true;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            oscard['onPress'] = verify;
            verify = undefined;
            if(!yankee) { _fun00006_ip = 411; continue _fun00005 }
 404:
            verify = function() {
                tangon = _closure1_slot41;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                report = 26;
                entity = golfie[report];
                zuuluu = undefined;
                michal = oscard.bind(zuuluu)(entity);
                entity = {};
                report = golfie[report];
                report = oscard.bind(zuuluu)(report);
                report = report.Sizes;
                report = report.SMALL;
                entity['size'] = report;
                report = 70;
                report = golfie[report];
                report = oscard.bind(zuuluu)(report);
                entity['source'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
 411:
            oscard['renderIcon'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 432:
            return entity;
        }
    };
    var _closure1_slot57 = entity;
    entity = function(argFoo) { // Original name: ManageAppButton
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.user;
            michal = zuuluu.application;
            var _closure2_slot0 = michal;
            tangon = zuuluu.channel;
            var _closure2_slot1 = tangon;
            zuuluu = zuuluu.oauth2Token;
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot44;
            report = undefined;
            foxtra = zuuluu.bind(report)();
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 39;
            zuuluu = oscard[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot10;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot10;
                entity = michal.getSelfEmbeddedActivities;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            var _closure2_slot3 = zuuluu;
            tangon = entity.bot;
            zuuluu = null;
            entity = null;
            if(!tangon) { _fun00008_ip = 335; continue _fun00007 }
 121:
            michal = zuuluu != michal;
            entity = null;
            if(!michal) { _fun00008_ip = 335; continue _fun00007 }
 133:
            tangon = _closure1_slot41;
            zuuluu = _closure1_slot8;
            michal = {};
            oscard = foxtra.buttonContainer;
            michal['style'] = oscard;
            option = _closure1_slot41;
            romeon = _closure1_slot1;
            backup = _closure1_slot2;
            yankee = 65;
            oscard = backup[yankee];
            golfie = romeon.bind(report)(oscard);
            oscard = {};
            foxtra = foxtra.appDMButton;
            oscard['style'] = foxtra;
            foxtra = backup[yankee];
            foxtra = romeon.bind(report)(foxtra);
            foxtra = foxtra.Sizes;
            foxtra = foxtra.XSMALL;
            oscard['size'] = foxtra;
            yankee = backup[yankee];
            yankee = romeon.bind(report)(yankee);
            yankee = yankee.Colors;
            yankee = yankee.GREY;
            oscard['color'] = yankee;
            foxtra = _closure1_slot0;
            offset = 36;
            yankee = backup[offset];
            yankee = foxtra.bind(report)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = backup[offset];
            offset = foxtra.bind(report)(offset);
            offset = offset.t;
            offset = offset.5S3sQE;
            offset = yankee.bind(romeon)(offset);
            oscard['text'] = offset;
            offset = function() { // Original name: onPress
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 71;
                zuuluu = report[entity];
                entity = undefined;
                offset = tangon.bind(entity)(zuuluu);
                verify = offset.openAlert;
                yankee = _closure1_slot41;
                tangon = _closure1_slot1;
                zuuluu = 72;
                zuuluu = report[zuuluu];
                option = tangon.bind(entity)(zuuluu);
                zuuluu = {};
                golfie = _closure2_slot0;
                zuuluu['application'] = golfie;
                romeon = function() { // Original name: onDelete
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        entity = 73;
                        michal = tangon[entity];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(michal);
                        oscard = golfie.delete;
                        michal = _closure2_slot2;
                        michal = michal.id;
                        michal = oscard.bind(golfie)(michal);
                        golfie = _closure2_slot3;
                        oscard = golfie.get;
                        michal = _closure2_slot0;
                        michal = michal.id;
                        golfie = oscard.bind(golfie)(michal);
                        michal = 74;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.leaveActivity;
                        michal = {};
                        oscard = null;
                        option = oscard == golfie;
                        oscard = undefined;
                        if(option) { _fun00010_ip = 106; continue _fun00009 }
 101:
                        oscard = golfie.location;
 106:
                        michal['location'] = oscard;
                        report = _closure2_slot0;
                        report = report.id;
                        michal['applicationId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    }
                };
                zuuluu['onDelete'] = romeon;
                option = yankee.bind(entity)(option, zuuluu);
                zuuluu = 'confirm-delete-authed-app';
                zuuluu = verify.bind(offset)(zuuluu, option);
                zuuluu = 75;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot25;
                zuuluu = michal.APP_MANAGE_CTA_CLICKED;
                michal = {};
                golfie = golfie.id;
                michal['application_id'] = golfie;
                oscard = _closure2_slot1;
                golfie = oscard.id;
                michal['channel_id'] = golfie;
                oscard = oscard.type;
                michal['channel_type'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            oscard['onPress'] = offset;
            verify = function() { // Original name: renderIcon
                tangon = _closure1_slot41;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                report = 26;
                entity = golfie[report];
                zuuluu = undefined;
                michal = oscard.bind(zuuluu)(entity);
                entity = {};
                report = golfie[report];
                report = oscard.bind(zuuluu)(report);
                report = report.Sizes;
                report = report.SMALL;
                entity['size'] = report;
                report = 76;
                report = golfie[report];
                report = oscard.bind(zuuluu)(report);
                entity['source'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            oscard['renderIcon'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 335:
            return entity;
        }
    };
    var _closure1_slot58 = entity;
    entity = function(argFoo) { // Original name: MuteAppButton
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            var _closure2_slot0 = michal;
            entity = entity.user;
            michal = _closure1_slot44;
            report = undefined;
            kiloes = michal.bind(report)();
            var _closure2_slot1 = kiloes;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 39;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            tangon = oscard.useStateFromStores;
            michal = _closure1_slot23;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                tangon = _closure1_slot23;
                zuuluu = tangon.isChannelMuted;
                entity = _closure2_slot0;
                michal = entity.id;
                entity = null;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            offset = tangon.bind(oscard)(zuuluu, michal);
            var _closure2_slot2 = offset;
            michal = entity.bot;
            entity = null;
            if(!michal) { _fun00012_ip = 343; continue _fun00011 }
 104:
            tangon = _closure1_slot41;
            zuuluu = _closure1_slot8;
            michal = {};
            oscard = kiloes.buttonContainer;
            michal['style'] = oscard;
            option = _closure1_slot41;
            foxtra = _closure1_slot1;
            romeon = _closure1_slot2;
            backup = 65;
            oscard = romeon[backup];
            golfie = foxtra.bind(report)(oscard);
            oscard = {};
            kiloes = kiloes.appDMButton;
            oscard['style'] = kiloes;
            romeon = romeon[backup];
            romeon = foxtra.bind(report)(romeon);
            romeon = romeon.Sizes;
            romeon = romeon.XSMALL;
            oscard['size'] = romeon;
            foxtra = _closure1_slot1;
            romeon = _closure1_slot2;
            romeon = romeon[backup];
            romeon = foxtra.bind(report)(romeon);
            foxtra = romeon.Colors;
            if(offset) { _fun00012_ip = 219; continue _fun00011 }
 211:
            romeon = foxtra.RED;
            _fun00012_ip = 225; continue _fun00011;
 219:
            romeon = foxtra.GREY;
 225:
            oscard['color'] = romeon;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 36;
            romeon = kiloes[yankee];
            romeon = backup.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            if(offset) { _fun00012_ip = 289; continue _fun00011 }
 276:
            offset = yankee.w4m94+;
            offset = romeon.bind(foxtra)(offset);
            _fun00012_ip = 300; continue _fun00011;
 289:
            yankee = yankee.YqAjX1;
            offset = romeon.bind(foxtra)(yankee);
 300:
            oscard['text'] = offset;
            offset = function() { // Original name: onPress
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure2_slot2;
                    michal = _closure1_slot1;
                    verify = _closure1_slot2;
                    if(tangon) { _fun00014_ip = 103; continue _fun00013 }
 21:
                    tangon = 81;
                    tangon = verify[tangon];
                    offset = undefined;
                    option = michal.bind(offset)(tangon);
                    golfie = option.openLazy;
                    report = _closure1_slot0;
                    tangon = 83;
                    tangon = verify[tangon];
                    oscard = report.bind(offset)(tangon);
                    tangon = 82;
                    report = verify[tangon];
                    tangon = verify.paths;
                    oscard = oscard.bind(offset)(report, tangon);
                    report = {};
                    tangon = _closure2_slot0;
                    report['channel'] = tangon;
                    tangon = 'MessageNotificationChannelActionSheet';
                    tangon = golfie.bind(option)(oscard, tangon, report);
                    _fun00014_ip = 282; continue _fun00013;
 103:
                    tangon = 77;
                    tangon = verify[tangon];
                    option = undefined;
                    offset = michal.bind(option)(tangon);
                    oscard = offset.updateChannelOverrideSettings;
                    zuuluu = _closure2_slot0;
                    foxtra = zuuluu.id;
                    tangon = {};
                    zuuluu = false;
                    tangon['muted'] = zuuluu;
                    golfie = _closure1_slot0;
                    entity = 78;
                    entity = verify[entity];
                    entity = golfie.bind(option)(entity);
                    entity = entity.NotificationLabels;
                    yankee = entity.Unmuted;
                    backup = null;
                    kiloes = offset;
                    romeon = tangon;
                    entity = kiloes[oscard](backup, foxtra, romeon, yankee, offset);
                    entity = 79;
                    entity = verify[entity];
                    zuuluu = michal.bind(option)(entity);
                    michal = zuuluu.open;
                    entity = {};
                    tangon = 'NOTIFICATIONS_UNMUTED';
                    entity['key'] = tangon;
                    tangon = 36;
                    report = verify[tangon];
                    report = golfie.bind(option)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = verify[tangon];
                    tangon = golfie.bind(option)(tangon);
                    tangon = tangon.t;
                    tangon = tangon./6kul5;
                    tangon = report.bind(oscard)(tangon);
                    entity['content'] = tangon;
                    tangon = function() { // Original name: icon
                        tangon = _closure1_slot41;
                        zuuluu = _closure1_slot8;
                        michal = {};
                        option = _closure2_slot1;
                        report = option.unmutedNotificationContainer;
                        michal['style'] = report;
                        golfie = _closure1_slot41;
                        offset = _closure1_slot1;
                        yankee = _closure1_slot2;
                        entity = 26;
                        report = yankee[entity];
                        entity = undefined;
                        oscard = offset.bind(entity)(report);
                        report = {};
                        verify = 80;
                        verify = yankee[verify];
                        verify = offset.bind(entity)(verify);
                        report['source'] = verify;
                        verify = 25;
                        verify = yankee[verify];
                        verify = offset.bind(entity)(verify);
                        verify = verify.unsafe_rawColors;
                        verify = verify.WHITE_500;
                        report['color'] = verify;
                        option = option.unmutedNotification;
                        report['style'] = option;
                        report = golfie.bind(entity)(oscard, report);
                        michal['children'] = report;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    entity['icon'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 282:
                    entity = undefined;
                    return entity;
                }
            };
            oscard['onPress'] = offset;
            verify = function() { // Original name: renderIcon
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure1_slot41;
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 26;
                    entity = golfie[report];
                    zuuluu = undefined;
                    michal = option.bind(zuuluu)(entity);
                    entity = {};
                    report = golfie[report];
                    report = option.bind(zuuluu)(report);
                    report = report.Sizes;
                    report = report.SMALL;
                    entity['size'] = report;
                    golfie = _closure2_slot2;
                    offset = _closure1_slot2;
                    if(golfie) { _fun00016_ip = 79; continue _fun00015 }
 70:
                    golfie = 80;
                    golfie = offset[golfie];
                    _fun00016_ip = 86; continue _fun00015;
 79:
                    verify = 84;
                    golfie = offset[verify];
 86:
                    golfie = option.bind(zuuluu)(golfie);
                    entity['source'] = golfie;
                    golfie = _closure2_slot2;
                    report = undefined;
                    if(golfie) { _fun00016_ip = 135; continue _fun00015 }
 104:
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 25;
                    oscard = option[oscard];
                    oscard = golfie.bind(zuuluu)(oscard);
                    oscard = oscard.unsafe_rawColors;
                    report = oscard.WHITE_500;
 135:
                    entity['color'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            oscard['renderIcon'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 343:
            return entity;
        }
    };
    var _closure1_slot59 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityIndicator;
    var _closure1_slot6 = golfie;
    golfie = tangon.Image;
    var _closure1_slot7 = golfie;
    tangon = tangon.View;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    sizing = 8;
    tangon = oscard[sizing];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.THREAD_CHANNEL_TYPES;
    var _closure1_slot14 = tangon;
    tangon = 10;
    golfie = oscard[tangon];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot15 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot16 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    kiloes = 12;
    tangon = oscard[kiloes];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot21 = tangon;
    foxtra = 16;
    tangon = oscard[foxtra];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot22 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot23 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot24 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot25 = golfie;
    golfie = tangon.AnalyticsPages;
    var _closure1_slot26 = golfie;
    golfie = tangon.AnalyticsSections;
    var _closure1_slot27 = golfie;
    golfie = tangon.ChannelSettingsSections;
    var _closure1_slot28 = golfie;
    golfie = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot29 = golfie;
    golfie = tangon.GuildSettingsSections;
    var _closure1_slot30 = golfie;
    golfie = tangon.HelpdeskArticles;
    var _closure1_slot31 = golfie;
    golfie = tangon.InstantInviteSources;
    var _closure1_slot32 = golfie;
    golfie = tangon.Permissions;
    var _closure1_slot33 = golfie;
    golfie = tangon.RelationshipTypes;
    var _closure1_slot34 = golfie;
    golfie = tangon.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot35 = golfie;
    tangon = tangon.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot36 = tangon;
    backup = 20;
    tangon = oscard[backup];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelFlags;
    var _closure1_slot37 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsActions;
    var _closure1_slot38 = golfie;
    tangon = tangon.AnalyticsSetupTypes;
    var _closure1_slot39 = tangon;
    tangon = 22;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
    var _closure1_slot40 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot41 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot42 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot43 = tangon;
    result = 24;
    tangon = oscard[result];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'position': 'absolute', 'paddingVertical': 8, 'paddingHorizontal': 12, 'width': '100%'};
    tangon['container'] = verify;
    verify = {};
    verify['marginTop'] = foxtra;
    tangon['title'] = verify;
    verify = {'marginBottom': 16, 'lineHeight': 20};
    tangon['subtitle'] = verify;
    verify = {'borderRadius': null, 'marginTop': 16, 'width': '100%'};
    yankee = 25;
    offset = oscard[yankee];
    offset = romeon.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    tangon['gdmInviteFriends'] = verify;
    verify = {'borderRadius': null, 'marginTop': 8, 'width': '100%'};
    offset = oscard[yankee];
    offset = romeon.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    tangon['gdmShareInviteLink'] = verify;
    verify = {};
    verify['marginTop'] = foxtra;
    tangon['gdmShareInviteLinkNoRelationships'] = verify;
    verify = {};
    verify['marginLeft'] = sizing;
    tangon['ctaLabel'] = verify;
    offset = 'row';
    verify = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    tangon['ctaContainer'] = verify;
    output = 'center';
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['ctaButton'] = verify;
    verify = {};
    verify['paddingRight'] = result;
    tangon['ctaAddRoles'] = verify;
    verify = {};
    verify['marginTop'] = foxtra;
    tangon['channelIcon'] = verify;
    verify = {};
    verify['marginBottom'] = foxtra;
    tangon['avatar'] = verify;
    verify = {};
    verify['marginBottom'] = foxtra;
    tangon['avatarRedesign'] = verify;
    verify = {'paddingHorizontal': 8, 'alignItems': 'center'};
    tangon['centerHeader'] = verify;
    verify = {};
    verify['textAlign'] = output;
    tangon['gdmText'] = verify;
    verify = {'marginBottom': 8, 'textAlign': 'center'};
    tangon['dmTitle'] = verify;
    verify = {};
    verify['marginTop'] = sizing;
    tangon['dmBeginningMessage'] = verify;
    verify = {};
    verify['marginTop'] = kiloes;
    tangon['provisionalAccountExplainer'] = verify;
    verify = {'marginTop': 8, 'marginLeft': 8, 'height': 26};
    tangon['mutualGuildsLabel'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['mutualGuildsIcons'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 6};
    tangon['mutualGuildsContainer'] = verify;
    verify = {'width': 64, 'height': 64, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.xxl;
    verify['borderRadius'] = kiloes;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_ACCENT;
    verify['backgroundColor'] = kiloes;
    tangon['threadIconContainer'] = verify;
    verify = {};
    verify['lineHeight'] = backup;
    tangon['threadDetails'] = verify;
    verify = {'paddingRight': 4, 'paddingTop': 2};
    tangon['threadCreatorRoleDot'] = verify;
    verify = {'marginTop': 8, 'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap'};
    tangon['tagContainer'] = verify;
    verify = {'width': 64, 'height': 64, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xxl;
    verify['borderRadius'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    tangon['forumPostIconContainer'] = verify;
    verify = {'marginTop': 16, 'flexDirection': 'row', 'alignItems': 'center'};
    tangon['buttonContainer'] = verify;
    verify = {'flexGrow': 0, 'paddingHorizontal': 8, 'marginRight': 8};
    tangon['spamButton'] = verify;
    verify = {'flexGrow': 0, 'paddingHorizontal': 0, 'marginRight': 8};
    tangon['spamButtonNoPadding'] = verify;
    verify = {};
    backup = 32;
    verify['top'] = backup;
    tangon['systemDMContainer'] = verify;
    verify = {};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = backup;
    verify['padding'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.lg;
    verify['borderRadius'] = foxtra;
    tangon['systemDMHeaderContainer'] = verify;
    verify = {};
    verify['flexDirection'] = offset;
    tangon['systemDMImages'] = verify;
    verify = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.INTERACTIVE_ACTIVE;
    verify['color'] = foxtra;
    tangon['forumPostIconColor'] = verify;
    verify = {'borderRadius': null, 'backgroundColor': null, 'height': 24, 'width': 24, 'padding': 4, 'alignContent': 'center'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.round;
    verify['borderRadius'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.STATUS_POSITIVE;
    verify['backgroundColor'] = yankee;
    tangon['unmutedNotificationContainer'] = verify;
    verify = {'width': 16, 'height': 16};
    tangon['unmutedNotification'] = verify;
    verify = {};
    verify['flexDirection'] = offset;
    tangon['appDMButtonContainer'] = verify;
    verify = {'flexGrow': 0, 'marginRight': 8};
    tangon['appDMButton'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot44 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowIcon
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.isPrivate;
            michal = zuuluu.isThread;
            tangon = zuuluu.isNSFW;
            zuuluu = zuuluu.isForumPost;
            report = _closure1_slot44;
            tangon = undefined;
            option = report.bind(tangon)();
            if(zuuluu) { _fun00018_ip = 236; continue _fun00017 }
 46:
            if(michal) { _fun00018_ip = 154; continue _fun00017 }
 49:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            if(entity) { _fun00018_ip = 80; continue _fun00017 }
 60:
            entity = 30;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            golfie = entity.TextIcon;
            _fun00018_ip = 98; continue _fun00017;
 80:
            entity = 29;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            golfie = entity.TextLockIcon;
 98:
            zuuluu = _closure1_slot41;
            michal = _closure1_slot8;
            entity = {};
            report = option.threadIconContainer;
            entity['style'] = report;
            oscard = _closure1_slot41;
            report = {'size': 'lg', 'color': 'white'};
            report = oscard.bind(tangon)(golfie, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 154:
            zuuluu = _closure1_slot41;
            michal = _closure1_slot8;
            entity = {};
            report = option.threadIconContainer;
            entity['style'] = report;
            golfie = _closure1_slot41;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 28;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            oscard = report.ThreadIcon;
            report = {'size': 'lg', 'color': 'white'};
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 236:
            zuuluu = _closure1_slot41;
            michal = _closure1_slot8;
            entity = {};
            report = option.forumPostIconContainer;
            entity['style'] = report;
            golfie = _closure1_slot41;
            foxtra = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 26;
            report = yankee[verify];
            oscard = foxtra.bind(tangon)(report);
            report = {};
            romeon = 27;
            romeon = yankee[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            report['source'] = romeon;
            offset = _closure1_slot0;
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.IconSizes;
            verify = verify.LARGE;
            report['size'] = verify;
            option = option.forumPostIconColor;
            option = option.color;
            report['color'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot45 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowHeader
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            foxtra = entity.title;
            offset = entity.subtitle;
            romeon = entity.isPrivate;
            verify = entity.isThread;
            backup = entity.isNSFW;
            output = entity.isForumPost;
            entity = _closure1_slot44;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            zuuluu = _closure1_slot43;
            michal = _closure1_slot42;
            entity = {};
            option = _closure1_slot41;
            oscard = _closure1_slot45;
            report = {};
            report['isNSFW'] = backup;
            report['isPrivate'] = romeon;
            report['isThread'] = verify;
            report['isForumPost'] = output;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(3);
            report[0] = oscard;
            verify = _closure1_slot41;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            romeon = 31;
            oscard = oscard[romeon];
            oscard = option.bind(tangon)(oscard);
            option = oscard.Text;
            oscard = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            kiloes = yankee.title;
            backup = new Array(2);
            backup[0] = kiloes;
            kiloes = {};
            sizing = 8;
            if(!output) { _fun00020_ip = 171; continue _fun00019 }
 169:
            sizing = 0;
 171:
            kiloes['marginBottom'] = sizing;
            backup[1] = kiloes;
            oscard['style'] = backup;
            oscard['children'] = foxtra;
            oscard = verify.bind(tangon)(option, oscard);
            report[1] = oscard;
            oscard = null;
            oscard = oscard != offset;
            if(!oscard) { _fun00020_ip = 270; continue _fun00019 }
 208:
            verify = _closure1_slot41;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[romeon];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            yankee = yankee.subtitle;
            golfie['style'] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 270:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot46 = tangon;
    tangon = function(argFoo) { // Original name: LinkManageButtons
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            report = entity.canManageRoles;
            oscard = entity.canEdit;
            golfie = entity.isPrivate;
            michal = entity.channel;
            var _closure2_slot0 = michal;
            option = entity.theme;
            entity = _closure1_slot44;
            tangon = undefined;
            backup = entity.bind(tangon)();
            michal = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 32;
            entity = romeon[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.useToken;
            verify = _closure1_slot1;
            entity = 25;
            entity = romeon[entity];
            entity = verify.bind(tangon)(entity);
            entity = entity.colors;
            entity = entity.TEXT_LINK;
            kiloes = michal.bind(zuuluu)(entity, option);
            zuuluu = _closure1_slot43;
            michal = _closure1_slot8;
            entity = {};
            option = backup.ctaContainer;
            entity['style'] = option;
            if(!golfie) { _fun00022_ip = 135; continue _fun00021 }
 132:
            golfie = report;
 135:
            if(!golfie) { _fun00022_ip = 437; continue _fun00021 }
 141:
            verify = _closure1_slot43;
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            report = 33;
            report = ctrled[report];
            report = source.bind(tangon)(report);
            option = report.PressableOpacity;
            report = {};
            romeon = 'button';
            report['accessibilityRole'] = romeon;
            romeon = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 34;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openAddMembersActionSheet;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report['onPress'] = romeon;
            foxtra = backup.ctaButton;
            romeon = new Array(2);
            romeon[0] = foxtra;
            foxtra = backup.subtitle;
            romeon[1] = foxtra;
            report['style'] = romeon;
            sizing = _closure1_slot41;
            echoed = _closure1_slot1;
            output = 26;
            romeon = ctrled[output];
            foxtra = echoed.bind(tangon)(romeon);
            romeon = {};
            result = 35;
            result = ctrled[result];
            result = echoed.bind(tangon)(result);
            romeon['source'] = result;
            output = ctrled[output];
            output = source.bind(tangon)(output);
            output = output.IconSizes;
            output = output.REFRESH_SMALL_16;
            romeon['size'] = output;
            romeon['color'] = kiloes;
            foxtra = sizing.bind(tangon)(foxtra, romeon);
            romeon = new Array(2);
            romeon[0] = foxtra;
            output = _closure1_slot41;
            foxtra = 31;
            foxtra = ctrled[foxtra];
            foxtra = source.bind(tangon)(foxtra);
            sizing = foxtra.Text;
            foxtra = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            echoed = backup.ctaLabel;
            result = new Array(2);
            result[0] = echoed;
            echoed = backup.ctaAddRoles;
            result[1] = echoed;
            foxtra['style'] = result;
            result = 36;
            echoed = ctrled[result];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.dMJ3Y2;
            result = echoed.bind(update)(result);
            foxtra['children'] = result;
            foxtra = output.bind(tangon)(sizing, foxtra);
            romeon[1] = foxtra;
            report['children'] = romeon;
            golfie = verify.bind(tangon)(option, report);
 437:
            report = new Array(2);
            report[0] = golfie;
            if(!oscard) { _fun00022_ip = 739; continue _fun00021 }
 451:
            verify = _closure1_slot43;
            output = _closure1_slot0;
            result = _closure1_slot2;
            golfie = 33;
            golfie = result[golfie];
            golfie = output.bind(tangon)(golfie);
            option = golfie.PressableOpacity;
            golfie = {};
            romeon = 'button';
            golfie['accessibilityRole'] = romeon;
            offset = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 37;
                oscard = tangon[michal];
                entity = undefined;
                golfie = zuuluu.bind(entity)(oscard);
                oscard = golfie.setSection;
                report = _closure1_slot28;
                report = report.OVERVIEW;
                report = oscard.bind(golfie)(report);
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.open;
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie['onPress'] = offset;
            romeon = backup.ctaButton;
            offset = new Array(2);
            offset[0] = romeon;
            romeon = backup.subtitle;
            offset[1] = romeon;
            golfie['style'] = offset;
            foxtra = _closure1_slot41;
            update = _closure1_slot1;
            sizing = 26;
            offset = result[sizing];
            romeon = update.bind(tangon)(offset);
            offset = {};
            echoed = 38;
            echoed = result[echoed];
            echoed = update.bind(tangon)(echoed);
            offset['source'] = echoed;
            sizing = result[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.IconSizes;
            sizing = sizing.REFRESH_SMALL_16;
            offset['size'] = sizing;
            offset['color'] = kiloes;
            romeon = foxtra.bind(tangon)(romeon, offset);
            offset = new Array(2);
            offset[0] = romeon;
            foxtra = _closure1_slot41;
            yankee = 31;
            yankee = result[yankee];
            yankee = output.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            kiloes = backup.ctaLabel;
            backup = new Array(1);
            backup[0] = kiloes;
            yankee['style'] = backup;
            backup = 36;
            kiloes = result[backup];
            kiloes = output.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = result[backup];
            backup = output.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.GE1Tlp;
            backup = kiloes.bind(sizing)(backup);
            yankee['children'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 739:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot47 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowThread
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            romeon = entity.channel;
            var _closure2_slot0 = romeon;
            entity = _closure1_slot44;
            report = undefined;
            yankee = entity.bind(report)();
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 45;
            entity = zuuluu[entity];
            entity = michal.bind(report)(entity);
            kiloes = entity.bind(report)(romeon);
            michal = _closure1_slot0;
            entity = 46;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            entity = tangon.isPrivateGuildChannel;
            backup = entity.bind(tangon)(romeon);
            entity = 47;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            entity = tangon.useAppliedTags;
            result = entity.bind(tangon)(romeon);
            entity = 39;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            zuuluu = tangon.useStateFromStoresObject;
            entity = _closure1_slot11;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot11;
                michal = zuuluu.getMessage;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            verify = entity.firstMessage;
            entity = romeon.threadMetadata;
            offset = null;
            michal = offset == entity;
            entity = null;
            if(michal) { _fun00024_ip = 633; continue _fun00023 }
 171:
            tangon = _closure1_slot43;
            zuuluu = _closure1_slot42;
            michal = {};
            foxtra = _closure1_slot41;
            golfie = _closure1_slot46;
            oscard = {};
            sizing = romeon.isNSFW;
            sizing = sizing.bind(romeon)();
            oscard['isNSFW'] = sizing;
            oscard['title'] = kiloes;
            oscard['isPrivate'] = backup;
            backup = true;
            oscard['isThread'] = backup;
            backup = romeon.isForumPost;
            backup = backup.bind(romeon)();
            oscard['isForumPost'] = backup;
            golfie = foxtra.bind(report)(golfie, oscard);
            oscard = new Array(4);
            oscard[0] = golfie;
            golfie = romeon.isForumPost;
            foxtra = golfie.bind(romeon)();
            golfie = null;
            if(!foxtra) { _fun00024_ip = 329; continue _fun00023 }
 266:
            backup = result.length;
            foxtra = 0;
            foxtra = backup > foxtra;
            golfie = null;
            if(!foxtra) { _fun00024_ip = 329; continue _fun00023 }
 282:
            kiloes = _closure1_slot41;
            backup = _closure1_slot8;
            foxtra = {};
            sizing = yankee.tagContainer;
            foxtra['style'] = sizing;
            output = result.map;
            sizing = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot41;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 48;
                michal = tangon[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.AppliedForumTagPill;
                michal = {};
                michal['tag'] = entity;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            sizing = output.bind(result)(sizing);
            foxtra['children'] = sizing;
            golfie = kiloes.bind(report)(backup, foxtra);
 329:
            oscard[1] = golfie;
            golfie = romeon.isForumPost;
            golfie = golfie.bind(romeon)();
            golfie = !golfie;
            if(!golfie) { _fun00024_ip = 479; continue _fun00023 }
 352:
            kiloes = _closure1_slot41;
            output = _closure1_slot0;
            source = _closure1_slot2;
            foxtra = 31;
            foxtra = source[foxtra];
            foxtra = output.bind(report)(foxtra);
            backup = foxtra.Text;
            foxtra = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            sizing = yankee.threadDetails;
            foxtra['style'] = sizing;
            sizing = 36;
            result = source[sizing];
            result = output.bind(report)(result);
            echoed = result.intl;
            result = echoed.format;
            sizing = source[sizing];
            sizing = output.bind(report)(sizing);
            sizing = sizing.t;
            output = sizing.imPXd3;
            sizing = {};
            update = function(argFoo, argBar) { // Original name: usernameHook
                report = _closure1_slot41;
                tangon = _closure1_slot56;
                zuuluu = {};
                entity = _closure2_slot0;
                michal = entity.ownerId;
                zuuluu['userId'] = michal;
                entity = entity.guild_id;
                zuuluu['guildId'] = entity;
                michal = undefined;
                entity = argBar;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            sizing['usernameHook'] = update;
            sizing = result.bind(echoed)(output, sizing);
            foxtra['children'] = sizing;
            golfie = kiloes.bind(report)(backup, foxtra);
 479:
            oscard[2] = golfie;
            golfie = romeon.isForumPost;
            romeon = golfie.bind(romeon)();
            golfie = null;
            if(!romeon) { _fun00024_ip = 619; continue _fun00023 }
 498:
            verify = offset == verify;
            golfie = null;
            if(!verify) { _fun00024_ip = 619; continue _fun00023 }
 507:
            offset = _closure1_slot41;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 31;
            option = kiloes[option];
            option = backup.bind(report)(option);
            verify = option.Text;
            option = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            yankee = yankee.threadDetails;
            option['style'] = yankee;
            yankee = 36;
            romeon = kiloes[yankee];
            romeon = backup.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.mE3KJC;
            yankee = romeon.bind(foxtra)(yankee);
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 619:
            oscard[3] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 633:
            return entity;
        }
    };
    var _closure1_slot48 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowGuildNonDefaultChannel
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            offset = entity.guild;
            yankee = entity.channel;
            var _closure2_slot0 = yankee;
            foxtra = _closure1_slot1;
            entity = _closure1_slot2;
            michal = 45;
            michal = entity[michal];
            tangon = undefined;
            zuuluu = foxtra.bind(tangon)(michal);
            michal = true;
            verify = zuuluu.bind(tangon)(yankee, michal);
            report = _closure1_slot21;
            option = report.can;
            michal = _closure1_slot33;
            zuuluu = michal.MANAGE_CHANNELS;
            option = option.bind(report)(zuuluu, yankee);
            romeon = report.can;
            zuuluu = michal.MANAGE_ROLES;
            kiloes = romeon.bind(report)(zuuluu, yankee);
            zuuluu = report.can;
            michal = michal.READ_MESSAGE_HISTORY;
            zuuluu = zuuluu.bind(report)(michal, yankee);
            michal = _closure1_slot0;
            report = 46;
            report = entity[report];
            romeon = michal.bind(tangon)(report);
            report = romeon.isPrivateGuildChannel;
            romeon = report.bind(romeon)(yankee);
            report = 49;
            report = entity[report];
            report = foxtra.bind(tangon)(report);
            backup = report.bind(tangon)();
            output = 36;
            report = entity[output];
            report = michal.bind(tangon)(report);
            foxtra = report.intl;
            report = foxtra.formatToPlainString;
            entity = entity[output];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.q0tgLS;
            entity = {};
            entity['channelName'] = verify;
            sizing = report.bind(foxtra)(michal, entity);
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            report = entity[output];
            report = michal.bind(tangon)(report);
            report = report.intl;
            if(romeon) { _fun00026_ip = 331; continue _fun00025 }
 239:
            if(zuuluu) { _fun00026_ip = 289; continue _fun00025 }
 242:
            result = report.format;
            zuuluu = entity[output];
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            foxtra = zuuluu.hPVEQE;
            zuuluu = {};
            echoed = yankee.name;
            zuuluu['channelName'] = echoed;
            foxtra = result.bind(report)(foxtra, zuuluu);
            _fun00026_ip = 329; continue _fun00025;
 289:
            echoed = report.formatToPlainString;
            zuuluu = entity[output];
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            result = zuuluu.JHKUGB;
            zuuluu = {};
            zuuluu['channelName'] = verify;
            foxtra = echoed.bind(report)(result, zuuluu);
 329:
            _fun00026_ip = 385; continue _fun00025;
 331:
            zuuluu = report.format;
            entity = entity[output];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.QuwqjI;
            entity = {};
            entity['channelName'] = verify;
            oscard = function() { // Original name: topicHook
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 50;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.parseTopic;
                entity = _closure2_slot0;
                zuuluu = entity.topic;
                michal = {};
                entity = entity.id;
                michal['channelId'] = entity;
                entity = true;
                entity = tangon.bind(report)(zuuluu, entity, michal);
                return entity;
            };
            entity['topicHook'] = oscard;
            foxtra = zuuluu.bind(report)(michal, entity);
 385:
            zuuluu = _closure1_slot43;
            michal = _closure1_slot42;
            entity = {};
            verify = _closure1_slot41;
            oscard = _closure1_slot46;
            report = {};
            report['title'] = sizing;
            report['subtitle'] = foxtra;
            report['isPrivate'] = romeon;
            oscard = verify.bind(tangon)(oscard, report);
            report = new Array(3);
            report[0] = oscard;
            foxtra = _closure1_slot41;
            verify = _closure1_slot47;
            oscard = {};
            oscard['canManageRoles'] = kiloes;
            oscard['canEdit'] = option;
            oscard['isPrivate'] = romeon;
            oscard['channel'] = yankee;
            oscard['theme'] = backup;
            oscard = foxtra.bind(tangon)(verify, oscard);
            report[1] = oscard;
            oscard = null;
            if(!romeon) { _fun00026_ip = 526; continue _fun00025 }
 481:
            oscard = null;
            if(!option) { _fun00026_ip = 526; continue _fun00025 }
 486:
            verify = _closure1_slot41;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 51;
            golfie = romeon[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['channel'] = yankee;
            golfie['guild'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 526:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot49 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowGuild
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            michal = argFoo;
            golfie = michal.guild;
            var _closure2_slot0 = golfie;
            oscard = michal.channel;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 39;
            zuuluu = report[zuuluu];
            report = undefined;
            option = tangon.bind(report)(zuuluu);
            tangon = option.useStateFromStores;
            verify = _closure1_slot18;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot18;
                michal = zuuluu.getDefaultChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = tangon.bind(option)(zuuluu, entity);
            option = _closure1_slot21;
            tangon = option.can;
            zuuluu = _closure1_slot33;
            zuuluu = zuuluu.READ_MESSAGE_HISTORY;
            zuuluu = tangon.bind(option)(zuuluu, oscard);
            if(!zuuluu) { _fun00028_ip = 128; continue _fun00027 }
 103:
            zuuluu = null;
            tangon = zuuluu == entity;
            zuuluu = undefined;
            if(tangon) { _fun00028_ip = 119; continue _fun00027 }
 114:
            zuuluu = entity.id;
 119:
            entity = oscard.id;
            if(!(zuuluu !== entity)) { _fun00028_ip = 154; continue _fun00027 }
 128:
            tangon = _closure1_slot41;
            zuuluu = _closure1_slot49;
            entity = {};
            entity['guild'] = golfie;
            entity['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00028_ip = 178; continue _fun00027;
 154:
            tangon = _closure1_slot41;
            zuuluu = _closure1_slot51;
            michal = {};
            michal['guild'] = golfie;
            michal['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 178:
            return entity;
        }
    };
    var _closure1_slot50 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowGuildDefaultChannel
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            offset = entity.guild;
            var _closure2_slot0 = offset;
            result = entity.channel;
            var _closure2_slot1 = result;
            entity = offset.id;
            var _closure2_slot2 = entity;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 52;
            michal = foxtra[entity];
            tangon = undefined;
            zuuluu = romeon.bind(tangon)(michal);
            michal = zuuluu.useCompletedStates;
            michal = michal.bind(zuuluu)(offset);
            kiloes = michal.guildPopulated;
            output = michal.guildPersonalized;
            entity = foxtra[entity];
            michal = romeon.bind(tangon)(entity);
            entity = michal.usePermissions;
            entity = entity.bind(michal)(result, offset);
            michal = entity.canInvite;
            zuuluu = entity.canManageGuild;
            report = 39;
            entity = foxtra[report];
            verify = romeon.bind(tangon)(entity);
            option = verify.useStateFromStores;
            entity = _closure1_slot24;
            oscard = new Array(1);
            oscard[0] = entity;
            entity = function() {
                michal = _closure1_slot24;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = option.bind(verify)(oscard, entity);
            oscard = _closure1_slot1;
            entity = 53;
            entity = foxtra[entity];
            backup = oscard.bind(tangon)(entity);
            option = null;
            yankee = option != verify;
            entity = 'ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined';
            entity = backup.bind(tangon)(yankee, entity);
            entity = offset.isOwner;
            verify = entity.bind(offset)(verify);
            entity = 54;
            entity = foxtra[entity];
            yankee = oscard.bind(tangon)(entity);
            oscard = yankee.extractTimestamp;
            entity = offset.id;
            yankee = oscard.bind(yankee)(entity);
            entity = global;
            backup = entity.Date;
            oscard = backup.now;
            backup = oscard.bind(backup)();
            oscard = _closure1_slot36;
            oscard = backup - oscard;
            backup = yankee < oscard;
            oscard = 46;
            oscard = foxtra[oscard];
            yankee = romeon.bind(tangon)(oscard);
            oscard = yankee.isPrivateGuildChannel;
            yankee = oscard.bind(yankee)(result);
            oscard = 55;
            oscard = foxtra[oscard];
            result = romeon.bind(tangon)(oscard);
            oscard = result.useIsEligibleForGuildProgress;
            oscard = oscard.bind(result)(offset);
            report = foxtra[report];
            result = romeon.bind(tangon)(report);
            foxtra = result.useStateFromStoresObject;
            report = _closure1_slot12;
            romeon = new Array(1);
            romeon[0] = report;
            report = function() {
                michal = _closure1_slot12;
                entity = michal.getErrors;
                entity = entity.bind(michal)();
                return entity;
            };
            report = foxtra.bind(result)(romeon, report);
            var _closure2_slot3 = report;
            result = _closure1_slot5;
            foxtra = result.useLayoutEffect;
            report = report.message;
            romeon = new Array(1);
            romeon[0] = report;
            report = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    michal = _closure2_slot3;
                    zuuluu = michal.message;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00032_ip = 63; continue _fun00031 }
 18:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 56;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.presentError;
                    entity = _closure2_slot3;
                    entity = entity.message;
                    entity = michal.bind(zuuluu)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            report = foxtra.bind(result)(report, romeon);
            romeon = undefined;
            if(!zuuluu) { _fun00030_ip = 544; continue _fun00029 }
 391:
            zuuluu = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00034_ip = 178; continue _fun00033 }
 10:
                            report = _closure1_slot1;
                            oscard = _closure1_slot2;
                            option = 57;
                            michal = oscard[option];
                            zuuluu = undefined;
                            offset = report.bind(zuuluu)(michal);
                            verify = offset.init;
                            michal = _closure2_slot2;
                            michal = verify.bind(offset)(michal);
                            michal = 58;
                            michal = oscard[michal];
                            oscard = report.bind(zuuluu)(michal);
                            report = oscard.openImagePicker;
                            michal = {};
                            verify = _closure1_slot35;
                            michal['size'] = verify;
                            michal = report.bind(oscard)(michal);
                            SaveGenerator(address=90);
 88:
                            return michal;
 90:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00034_ip = 175; continue _fun00033 }
 96:
                            yankee = michal.base64;
                            report = null;
                            if(!(report != yankee)) { _fun00034_ip = 172; continue _fun00033 }
 108:
                            oscard = _closure1_slot1;
                            report = _closure1_slot2;
                            verify = report[option];
                            offset = oscard.bind(zuuluu)(verify);
                            verify = offset.updateIcon;
                            golfie = _closure2_slot2;
                            verify = verify.bind(offset)(golfie, yankee);
                            report = report[option];
                            oscard = oscard.bind(zuuluu)(report);
                            report = oscard.open;
                            tangon = _closure1_slot30;
                            tangon = tangon.LANDING;
                            tangon = report.bind(oscard)(golfie, tangon);
 172:
                            return zuuluu;
 175:
                            return michal;
 178:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            result = zuuluu.bind(tangon)();
            foxtra = _closure1_slot41;
            echoed = _closure1_slot1;
            ctrled = _closure1_slot2;
            zuuluu = 59;
            zuuluu = ctrled[zuuluu];
            report = echoed.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['onPress'] = result;
            result = 60;
            result = ctrled[result];
            result = echoed.bind(tangon)(result);
            zuuluu['source'] = result;
            source = _closure1_slot0;
            result = 36;
            echoed = ctrled[result];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.Yhi9/P;
            result = echoed.bind(update)(result);
            zuuluu['title'] = result;
            zuuluu['isCompleted'] = output;
            output = _closure1_slot39;
            output = output.CHANNEL_WELCOME;
            zuuluu['analyticsSetupType'] = output;
            output = _closure1_slot38;
            output = output.PERSONALIZE_SERVER;
            zuuluu['analyticsAction'] = output;
            romeon = foxtra.bind(tangon)(report, zuuluu);
 544:
            foxtra = undefined;
            if(!michal) { _fun00030_ip = 701; continue _fun00029 }
 552:
            report = _closure1_slot41;
            output = _closure1_slot1;
            update = _closure1_slot2;
            michal = 59;
            michal = update[michal];
            zuuluu = output.bind(tangon)(michal);
            michal = {};
            sizing = function() { // Original name: onPress
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.vanityURLCode;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00036_ip = 68; continue _fun00035 }
 19:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 61;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.showInstantInviteActionSheet;
                    zuuluu = _closure2_slot1;
                    michal = 'Welcome Message';
                    michal = tangon.bind(report)(zuuluu, michal);
                    _fun00036_ip = 120; continue _fun00035;
 68:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 61;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.showVanityUrlInviteActionSheet;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    entity = 'Welcome Message';
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 120:
                    entity = undefined;
                    return entity;
                }
            };
            michal['onPress'] = sizing;
            sizing = 62;
            sizing = update[sizing];
            sizing = output.bind(tangon)(sizing);
            michal['source'] = sizing;
            echoed = _closure1_slot0;
            sizing = 36;
            output = update[sizing];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            sizing = update[sizing];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.q9n0TU;
            sizing = output.bind(result)(sizing);
            michal['title'] = sizing;
            michal['isCompleted'] = kiloes;
            kiloes = _closure1_slot39;
            kiloes = kiloes.CHANNEL_WELCOME;
            michal['analyticsSetupType'] = kiloes;
            kiloes = _closure1_slot38;
            kiloes = kiloes.INVITE;
            michal['analyticsAction'] = kiloes;
            foxtra = report.bind(tangon)(zuuluu, michal);
 701:
            kiloes = _closure1_slot0;
            michal = _closure1_slot2;
            echoed = 36;
            zuuluu = michal[echoed];
            zuuluu = kiloes.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            michal = michal[echoed];
            michal = kiloes.bind(tangon)(michal);
            michal = michal.t;
            if(backup) { _fun00030_ip = 781; continue _fun00029 }
 748:
            if(verify) { _fun00030_ip = 766; continue _fun00029 }
 751:
            verify = michal.ezm+/v;
            verify = zuuluu.bind(report)(verify);
            _fun00030_ip = 779; continue _fun00029;
 766:
            backup = michal.1ach9P;
            verify = zuuluu.bind(report)(backup);
 779:
            _fun00030_ip = 794; continue _fun00029;
 781:
            michal = michal.gwyU/P;
            verify = zuuluu.bind(report)(michal);
 794:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 63;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.getArticleURL;
            michal = _closure1_slot31;
            michal = michal.GUILD_GETTING_STARTED;
            report = zuuluu.bind(report)(michal);
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm';
            result = zuuluu.bind(michal)(report, entity);
            if(!(option == foxtra)) { _fun00030_ip = 873; continue _fun00029 }
 866:
            backup = verify;
            if(!(option != romeon)) { _fun00030_ip = 980; continue _fun00029 }
 873:
            zuuluu = _closure1_slot43;
            michal = _closure1_slot42;
            entity = {};
            report = new Array(3);
            report[0] = verify;
            verify = ' ';
            report[1] = verify;
            option = null;
            if(oscard) { _fun00030_ip = 966; continue _fun00029 }
 904:
            kiloes = _closure1_slot0;
            verify = _closure1_slot2;
            sizing = verify[echoed];
            sizing = kiloes.bind(tangon)(sizing);
            output = sizing.intl;
            sizing = output.format;
            verify = verify[echoed];
            verify = kiloes.bind(tangon)(verify);
            verify = verify.t;
            kiloes = verify.UOtD39;
            verify = {};
            verify['guideURL'] = result;
            option = sizing.bind(output)(kiloes, verify);
 966:
            report[2] = option;
            entity['children'] = report;
            backup = zuuluu.bind(tangon)(michal, entity);
 980:
            zuuluu = _closure1_slot43;
            entity = _closure1_slot5;
            michal = entity.Fragment;
            entity = {};
            verify = _closure1_slot41;
            option = _closure1_slot46;
            report = {};
            sizing = _closure1_slot0;
            kiloes = _closure1_slot2;
            output = kiloes[echoed];
            output = sizing.bind(tangon)(output);
            result = output.intl;
            output = result.formatToPlainString;
            kiloes = kiloes[echoed];
            kiloes = sizing.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            sizing = kiloes.j59F/f;
            kiloes = {};
            echoed = offset.name;
            kiloes['guildName'] = echoed;
            kiloes = output.bind(result)(sizing, kiloes);
            report['title'] = kiloes;
            report['subtitle'] = backup;
            report['isPrivate'] = yankee;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            if(oscard) { _fun00030_ip = 1137; continue _fun00029 }
 1103:
            verify = _closure1_slot43;
            option = _closure1_slot42;
            oscard = {};
            yankee = new Array(2);
            yankee[0] = foxtra;
            yankee[1] = romeon;
            oscard['children'] = yankee;
            oscard = verify.bind(tangon)(option, oscard);
            _fun00030_ip = 1173; continue _fun00029;
 1137:
            verify = _closure1_slot41;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 64;
            golfie = yankee[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['guild'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1173:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot51 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowDM
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            backup = entity.channel;
            var _closure2_slot0 = backup;
            romeon = entity.showingSpamBanner;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            entity = _closure1_slot44;
            result = entity.bind(report)();
            var _closure2_slot1 = result;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 85;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            entity = entity.bind(report)();
            entity = entity.analyticsLocations;
            var _closure2_slot2 = entity;
            oscard = _closure1_slot0;
            michal = 39;
            entity = tangon[michal];
            option = oscard.bind(report)(entity);
            golfie = option.useStateFromStores;
            entity = _closure1_slot24;
            oscard = new Array(1);
            oscard[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot24;
                michal = zuuluu.getUser;
                tangon = _closure2_slot0;
                entity = tangon.getRecipientId;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = golfie.bind(option)(oscard, entity);
            var _closure2_slot3 = foxtra;
            entity = 86;
            entity = tangon[entity];
            tangon = zuuluu.bind(report)(entity);
            entity = null;
            oscard = entity == foxtra;
            zuuluu = undefined;
            if(oscard) { _fun00038_ip = 169; continue _fun00037 }
 164:
            zuuluu = foxtra.id;
 169:
            if(!(entity == zuuluu)) { _fun00038_ip = 177; continue _fun00037 }
 173:
            zuuluu = _closure1_slot29;
 177:
            update = tangon.bind(report)(zuuluu);
            _closure2_slot4 = update;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = golfie[michal];
            yankee = tangon.bind(report)(zuuluu);
            option = yankee.useStateFromStoresObject;
            zuuluu = _closure1_slot15;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot4;
                    tangon = null;
                    report = tangon != michal;
                    michal = undefined;
                    if(!report) { _fun00040_ip = 68; continue _fun00039 }
 20:
                    oscard = _closure1_slot15;
                    report = oscard.getApps;
                    oscard = report.bind(oscard)();
                    tangon = tangon == oscard;
                    zuuluu = undefined;
                    if(tangon) { _fun00040_ip = 65; continue _fun00039 }
 46:
                    report = oscard.find;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure2_slot4;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    zuuluu = report.bind(oscard)(tangon);
 65:
                    michal = zuuluu;
 68:
                    entity['authorizedAppToken'] = michal;
                    zuuluu = _closure1_slot15;
                    michal = zuuluu.getFetchState;
                    michal = michal.bind(zuuluu)();
                    entity['authorizedAppsFetchState'] = michal;
                    return entity;
                }
            };
            zuuluu = option.bind(yankee)(oscard, zuuluu);
            option = zuuluu.authorizedAppToken;
            zuuluu = zuuluu.authorizedAppsFetchState;
            _closure2_slot5 = zuuluu;
            michal = golfie[michal];
            kiloes = tangon.bind(report)(michal);
            yankee = kiloes.useStateFromStores;
            michal = _closure1_slot13;
            oscard = new Array(1);
            oscard[0] = michal;
            tangon = new Array(1);
            tangon[0] = foxtra;
            michal = function() {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00042_ip = 43; continue _fun00041 }
 16:
                    tangon = _closure1_slot13;
                    zuuluu = tangon.getMutualGuilds;
                    michal = _closure2_slot3;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 43:
                    return entity;
                }
            };
            michal = yankee.bind(kiloes)(oscard, michal, tangon);
            _closure2_slot6 = michal;
            michal = backup.isSystemDM;
            michal = michal.bind(backup)();
            oscard = _closure1_slot1;
            tangon = 87;
            tangon = golfie[tangon];
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.useExperiment;
            tangon = {};
            yankee = 'EmptyMessages';
            tangon['location'] = yankee;
            tangon = oscard.bind(golfie)(tangon);
            yankee = tangon.enabledMobile;
            golfie = _closure1_slot5;
            kiloes = golfie.useEffect;
            oscard = new Array(2);
            oscard[0] = foxtra;
            oscard[1] = backup;
            tangon = function() {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    michal = _closure2_slot3;
                    option = null;
                    if(!(option != michal)) { _fun00044_ip = 105; continue _fun00043 }
 13:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 88;
                    michal = tangon[michal];
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    golfie = _closure2_slot3;
                    zuuluu = golfie.id;
                    oscard = golfie.getAvatarURL;
                    michal = _closure2_slot0;
                    option = option == michal;
                    michal = undefined;
                    if(option) { _fun00044_ip = 75; continue _fun00043 }
 66:
                    entity = _closure2_slot0;
                    michal = entity.guild_id;
 75:
                    entity = 80;
                    michal = oscard.bind(golfie)(michal, entity);
                    entity = {'withMutualGuilds': true, 'dispatchWait': true};
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 105:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = kiloes.bind(golfie)(tangon, oscard);
            oscard = golfie.useEffect;
            tangon = entity == foxtra;
            kiloes = undefined;
            if(tangon) { _fun00038_ip = 411; continue _fun00037 }
 405:
            kiloes = foxtra.bot;
 411:
            tangon = new Array(3);
            tangon[0] = kiloes;
            tangon[1] = option;
            tangon[2] = zuuluu;
            zuuluu = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00046_ip = 26; continue _fun00045 }
 16:
                    zuuluu = _closure2_slot3;
                    entity = zuuluu.bot;
 26:
                    if(!entity) { _fun00046_ip = 50; continue _fun00045 }
 29:
                    zuuluu = _closure2_slot5;
                    michal = _closure1_slot16;
                    michal = michal.NOT_FETCHED;
                    entity = zuuluu === michal;
 50:
                    if(!entity) { _fun00046_ip = 88; continue _fun00045 }
 53:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 73;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.fetch;
                    entity = entity.bind(michal)();
 88:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(zuuluu, tangon);
            if(!(entity != foxtra)) { _fun00038_ip = 1682; continue _fun00037 }
 447:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 40;
            golfie = zuuluu[tangon];
            sizing = oscard.bind(report)(golfie);
            kiloes = sizing.getUserTag;
            golfie = {'decoration': 'never', 'identifiable': 'always'};
            sequen = kiloes.bind(sizing)(foxtra, golfie);
            _closure2_slot7 = sequen;
            tangon = zuuluu[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.getName;
            papara = tangon.bind(oscard)(foxtra);
            config = function() { // Original name: handleCopyUserTag
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 89;
                michal = tangon[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.copy;
                michal = _closure2_slot7;
                michal = report.bind(oscard)(michal);
                michal = 56;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentUsernameCopied;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            golfie = _closure1_slot0;
            vacuum = 36;
            tangon = zuuluu[vacuum];
            tangon = golfie.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            zuuluu = zuuluu[vacuum];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.Rzvnio;
            output = tangon.bind(oscard)(zuuluu);
            if(michal) { _fun00038_ip = 641; continue _fun00037 }
 580:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            tangon = michal[vacuum];
            tangon = zuuluu.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.formatToPlainString;
            michal = michal[vacuum];
            michal = zuuluu.bind(report)(michal);
            michal = michal.t;
            zuuluu = michal.Q56TRE;
            michal = {};
            michal['username'] = papara;
            output = tangon.bind(oscard)(zuuluu, michal);
 641:
            michal = function() { // Original name: handleOpenMutualGuilds
                michal = function() { // Original name: close
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 81;
                    zuuluu = report[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    zuuluu = oscard.hideActionSheet;
                    zuuluu = zuuluu.bind(oscard)();
                    zuuluu = 90;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.popWithKey;
                    michal = _closure1_slot40;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                oscard = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 81;
                report = zuuluu[entity];
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = oscard.openLazy;
                golfie = _closure1_slot0;
                tangon = 83;
                tangon = zuuluu[tangon];
                golfie = golfie.bind(entity)(tangon);
                tangon = 91;
                tangon = zuuluu[tangon];
                zuuluu = zuuluu.paths;
                tangon = golfie.bind(entity)(tangon, zuuluu);
                zuuluu = {};
                golfie = _closure2_slot3;
                golfie = golfie.id;
                zuuluu['userId'] = golfie;
                zuuluu['onClose'] = michal;
                zuuluu['onSelectMutualGuild'] = michal;
                michal = 'MutualGuildsActionSheet';
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                return entity;
            };
            _closure2_slot8 = michal;
            michal = entity != backup;
            if(!michal) { _fun00038_ip = 663; continue _fun00037 }
 659:
            michal = entity != update;
 663:
            if(!michal) { _fun00038_ip = 670; continue _fun00037 }
 666:
            michal = entity != option;
 670:
            golfie = undefined;
            if(!michal) { _fun00038_ip = 921; continue _fun00037 }
 678:
            tangon = _closure1_slot43;
            zuuluu = _closure1_slot8;
            michal = {};
            oscard = result.appDMButtonContainer;
            michal['style'] = oscard;
            sizing = _closure1_slot41;
            kiloes = _closure1_slot59;
            oscard = {};
            oscard['user'] = foxtra;
            oscard['channel'] = backup;
            kiloes = sizing.bind(report)(kiloes, oscard);
            oscard = new Array(3);
            oscard[0] = kiloes;
            echoed = _closure1_slot41;
            sizing = _closure1_slot58;
            kiloes = {};
            kiloes['user'] = foxtra;
            kiloes['application'] = update;
            kiloes['channel'] = backup;
            kiloes['oauth2Token'] = option;
            kiloes = echoed.bind(report)(sizing, kiloes);
            oscard[1] = kiloes;
            if(!yankee) { _fun00038_ip = 907; continue _fun00037 }
 773:
            echoed = _closure1_slot41;
            sizing = _closure1_slot57;
            kiloes = {};
            kiloes['channel'] = backup;
            kiloes['user'] = foxtra;
            kiloes['showingSpamBanner'] = romeon;
            ctrled = _closure1_slot1;
            update = _closure1_slot2;
            source = 65;
            source = update[source];
            source = ctrled.bind(report)(source);
            source = source.Colors;
            source = source.GREY;
            kiloes['color'] = source;
            record = _closure1_slot0;
            source = update[vacuum];
            source = record.bind(report)(source);
            ctrled = source.intl;
            source = ctrled.string;
            update = update[vacuum];
            update = record.bind(report)(update);
            update = update.t;
            update = update.+78Pfn;
            update = source.bind(ctrled)(update);
            kiloes['text'] = update;
            update = result.spamButtonNoPadding;
            kiloes['style'] = update;
            update = true;
            kiloes['renderIcon'] = update;
            yankee = echoed.bind(report)(sizing, kiloes);
 907:
            oscard[2] = yankee;
            michal['children'] = oscard;
            golfie = tangon.bind(report)(zuuluu, michal);
 921:
            tangon = _closure1_slot43;
            zuuluu = _closure1_slot42;
            michal = {};
            sizing = _closure1_slot41;
            ctrled = _closure1_slot0;
            source = _closure1_slot2;
            kiloes = 33;
            oscard = source[kiloes];
            oscard = ctrled.bind(report)(oscard);
            yankee = oscard.PressableOpacity;
            oscard = {};
            record = 'button';
            oscard['accessibilityRole'] = record;
            echoed = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 92;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                report = _closure2_slot3;
                report = report.id;
                michal['userId'] = report;
                report = _closure2_slot0;
                report = report.id;
                michal['channelId'] = report;
                tangon = _closure2_slot2;
                michal['sourceAnalyticsLocations'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            oscard['onPress'] = echoed;
            echoed = source[vacuum];
            echoed = ctrled.bind(report)(echoed);
            cntext = echoed.intl;
            update = cntext.string;
            echoed = source[vacuum];
            echoed = ctrled.bind(report)(echoed);
            echoed = echoed.t;
            echoed = echoed.iXAna2;
            echoed = update.bind(cntext)(echoed);
            oscard['accessibilityLabel'] = echoed;
            cntext = _closure1_slot41;
            update = _closure1_slot1;
            target = 93;
            echoed = source[target];
            update = update.bind(report)(echoed);
            echoed = {};
            status = result.avatar;
            echoed['style'] = status;
            echoed['user'] = foxtra;
            status = backup.guild_id;
            echoed['guildId'] = status;
            target = source[target];
            target = ctrled.bind(report)(target);
            target = target.AvatarSizes;
            target = target.XXLARGE;
            echoed['size'] = target;
            target = foxtra.avatarDecoration;
            echoed['avatarDecoration'] = target;
            echoed = cntext.bind(report)(update, echoed);
            oscard['children'] = echoed;
            yankee = sizing.bind(report)(yankee, oscard);
            oscard = new Array(9);
            oscard[0] = yankee;
            update = _closure1_slot41;
            yankee = source[kiloes];
            yankee = ctrled.bind(report)(yankee);
            sizing = yankee.PressableOpacity;
            yankee = {};
            yankee['accessibilityRole'] = record;
            yankee['onPress'] = config;
            echoed = source[vacuum];
            echoed = ctrled.bind(report)(echoed);
            target = echoed.intl;
            cntext = target.string;
            echoed = source[vacuum];
            echoed = ctrled.bind(report)(echoed);
            echoed = echoed.t;
            echoed = echoed.y5MwJy;
            echoed = cntext.bind(target)(echoed);
            yankee['accessibilityHint'] = echoed;
            cntext = _closure1_slot41;
            echoed = 31;
            source = source[echoed];
            source = ctrled.bind(report)(source);
            ctrled = source.Text;
            source = {'variant': 'heading-xxl/extrabold', 'color': 'header-primary'};
            source['children'] = papara;
            source = cntext.bind(report)(ctrled, source);
            yankee['children'] = source;
            yankee = update.bind(report)(sizing, yankee);
            oscard[1] = yankee;
            yankee = foxtra.isProvisional;
            yankee = !yankee;
            if(!yankee) { _fun00038_ip = 1425; continue _fun00037 }
 1287:
            update = _closure1_slot41;
            ctrled = _closure1_slot0;
            source = _closure1_slot2;
            kiloes = source[kiloes];
            kiloes = ctrled.bind(report)(kiloes);
            sizing = kiloes.PressableOpacity;
            kiloes = {};
            kiloes['accessibilityRole'] = record;
            kiloes['onPress'] = config;
            config = source[vacuum];
            config = ctrled.bind(report)(config);
            record = config.intl;
            config = record.string;
            vacuum = source[vacuum];
            vacuum = ctrled.bind(report)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.y5MwJy;
            vacuum = config.bind(record)(vacuum);
            kiloes['accessibilityHint'] = vacuum;
            vacuum = _closure1_slot41;
            source = source[echoed];
            source = ctrled.bind(report)(source);
            ctrled = source.Text;
            source = {'variant': 'heading-lg/medium', 'color': 'header-secondary'};
            source['children'] = sequen;
            source = vacuum.bind(report)(ctrled, source);
            kiloes['children'] = source;
            yankee = update.bind(report)(sizing, kiloes);
 1425:
            oscard[2] = yankee;
            sizing = _closure1_slot41;
            kiloes = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[echoed];
            yankee = kiloes.bind(report)(yankee);
            kiloes = yankee.Text;
            yankee = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            echoed = result.dmBeginningMessage;
            yankee['style'] = echoed;
            yankee['children'] = output;
            yankee = sizing.bind(report)(kiloes, yankee);
            oscard[3] = yankee;
            yankee = foxtra.isProvisional;
            if(!yankee) { _fun00038_ip = 1569; continue _fun00037 }
 1504:
            output = _closure1_slot41;
            sizing = _closure1_slot0;
            echoed = _closure1_slot2;
            kiloes = 94;
            kiloes = echoed[kiloes];
            kiloes = sizing.bind(report)(kiloes);
            sizing = kiloes.ChatProvisionalAccountExplainerCard;
            kiloes = {};
            result = result.provisionalAccountExplainer;
            kiloes['style'] = result;
            result = foxtra.id;
            kiloes['userId'] = result;
            result = 14;
            kiloes['iconSize'] = result;
            yankee = output.bind(report)(sizing, kiloes);
 1569:
            oscard[4] = yankee;
            yankee = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = null;
                    if(!(entity != michal)) { _fun00048_ip = 383; continue _fun00047 }
 18:
                    entity = _closure2_slot6;
                    michal = entity.length;
                    entity = 1;
                    if(!(!(michal < entity))) { _fun00048_ip = 383; continue _fun00047 }
 37:
                    entity = _closure2_slot6;
                    foxtra = entity.length;
                    tangon = _closure2_slot6;
                    zuuluu = tangon.slice;
                    michal = 5;
                    entity = foxtra > michal;
                    if(!entity) { _fun00048_ip = 68; continue _fun00047 }
 65:
                    michal = 4;
 68:
                    entity = 0;
                    kiloes = zuuluu.bind(tangon)(entity, michal);
                    tangon = _closure1_slot43;
                    offset = _closure1_slot0;
                    backup = _closure1_slot2;
                    entity = 33;
                    entity = backup[entity];
                    zuuluu = undefined;
                    entity = offset.bind(zuuluu)(entity);
                    michal = entity.PressableOpacity;
                    entity = {};
                    golfie = 'button';
                    entity['accessibilityRole'] = golfie;
                    golfie = _closure2_slot8;
                    entity['onPress'] = golfie;
                    verify = _closure2_slot1;
                    report = verify.mutualGuildsContainer;
                    entity['style'] = report;
                    option = _closure1_slot41;
                    report = 95;
                    report = backup[report];
                    report = offset.bind(zuuluu)(report);
                    golfie = report.GuildIconPile;
                    report = {};
                    romeon = 96;
                    romeon = backup[romeon];
                    romeon = offset.bind(zuuluu)(romeon);
                    romeon = romeon.GuildIconSizes;
                    romeon = romeon.SMALL;
                    report['size'] = romeon;
                    sizing = kiloes.map;
                    romeon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.guild;
                        entity = entity.name;
                        return entity;
                    };
                    romeon = sizing.bind(kiloes)(romeon);
                    report['names'] = romeon;
                    report['totalCount'] = foxtra;
                    romeon = kiloes.map;
                    yankee = function(argFoo) {
                        entity = argFoo;
                        entity = entity.guild;
                        report = _closure1_slot41;
                        zuuluu = _closure1_slot1;
                        option = _closure1_slot2;
                        oscard = 96;
                        michal = option[oscard];
                        tangon = undefined;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = {};
                        michal['guild'] = entity;
                        golfie = _closure1_slot0;
                        oscard = option[oscard];
                        oscard = golfie.bind(tangon)(oscard);
                        oscard = oscard.GuildIconSizes;
                        oscard = oscard.SMALL;
                        michal['size'] = oscard;
                        entity = entity.id;
                        entity = report.bind(tangon)(zuuluu, michal, entity);
                        return entity;
                    };
                    yankee = romeon.bind(kiloes)(yankee);
                    report['children'] = yankee;
                    golfie = option.bind(zuuluu)(golfie, report);
                    report = new Array(2);
                    report[0] = golfie;
                    option = _closure1_slot41;
                    oscard = 31;
                    oscard = backup[oscard];
                    oscard = offset.bind(zuuluu)(oscard);
                    golfie = oscard.Text;
                    oscard = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    verify = verify.mutualGuildsLabel;
                    oscard['style'] = verify;
                    verify = 36;
                    yankee = backup[verify];
                    yankee = offset.bind(zuuluu)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.format;
                    verify = backup[verify];
                    verify = offset.bind(zuuluu)(verify);
                    verify = verify.t;
                    offset = verify.eE3oen;
                    verify = {};
                    verify['count'] = foxtra;
                    verify = yankee.bind(romeon)(offset, verify);
                    oscard['children'] = verify;
                    oscard = option.bind(zuuluu)(golfie, oscard);
                    report[1] = oscard;
                    entity['children'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
 383:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = yankee.bind(report)();
            oscard[5] = yankee;
            kiloes = _closure1_slot41;
            yankee = function() {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 39;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    report = michal.bind(tangon)(entity);
                    zuuluu = report.useStateFromStores;
                    entity = _closure1_slot22;
                    michal = new Array(1);
                    michal[0] = entity;
                    entity = function() {
                        zuuluu = _closure1_slot22;
                        michal = zuuluu.getRelationshipType;
                        entity = _closure2_slot3;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = zuuluu.bind(report)(michal, entity);
                    var _closure3_slot0 = michal;
                    verify = function() { // Original name: handleAddFriend
                        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                            michal = _closure3_slot0;
                            entity = _closure1_slot34;
                            entity = entity.PENDING_INCOMING;
                            if(!(michal === entity)) { _fun00052_ip = 91; continue _fun00051 }
 24:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 98;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.maybeConfirmFriendRequestAccept;
                            entity = {};
                            tangon = _closure2_slot3;
                            tangon = tangon.id;
                            entity['userId'] = tangon;
                            tangon = _closure1_slot26;
                            tangon = tangon.DM_CHANNEL;
                            entity['location'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            _fun00052_ip = 162; continue _fun00051;
 91:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 97;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.addRelationship;
                            entity = {};
                            tangon = _closure2_slot3;
                            tangon = tangon.id;
                            entity['userId'] = tangon;
                            tangon = {};
                            report = _closure1_slot26;
                            report = report.DM_CHANNEL;
                            tangon['location'] = report;
                            entity['context'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 162:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = _closure1_slot34;
                    entity = entity.FRIEND;
                    if(!(michal !== entity)) { _fun00050_ip = 941; continue _fun00049 }
 85:
                    entity = _closure2_slot3;
                    entity = entity.bot;
                    if(entity) { _fun00050_ip = 941; continue _fun00049 }
 104:
                    zuuluu = _closure2_slot3;
                    entity = zuuluu.isClyde;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00050_ip = 941; continue _fun00049 }
 124:
                    entity = _closure1_slot34;
                    entity = entity.NONE;
                    if(!(entity !== michal)) { _fun00050_ip = 710; continue _fun00049 }
 141:
                    entity = _closure1_slot34;
                    entity = entity.PENDING_INCOMING;
                    if(!(entity !== michal)) { _fun00050_ip = 367; continue _fun00049 }
 158:
                    entity = _closure1_slot34;
                    entity = entity.PENDING_OUTGOING;
                    if(!(entity !== michal)) { _fun00050_ip = 176; continue _fun00049 }
 172:
                    entity = null;
                    return entity;
 176:
                    zuuluu = _closure1_slot41;
                    michal = _closure1_slot8;
                    entity = {};
                    kiloes = _closure2_slot1;
                    report = kiloes.buttonContainer;
                    entity['style'] = report;
                    golfie = _closure1_slot41;
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    option = 65;
                    report = romeon[option];
                    oscard = yankee.bind(tangon)(report);
                    report = {};
                    kiloes = kiloes.spamButton;
                    report['style'] = kiloes;
                    result = _closure1_slot0;
                    kiloes = 36;
                    sizing = romeon[kiloes];
                    sizing = result.bind(tangon)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = romeon[kiloes];
                    kiloes = result.bind(tangon)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.xMH6vL;
                    kiloes = sizing.bind(output)(kiloes);
                    report['text'] = kiloes;
                    kiloes = romeon[option];
                    kiloes = yankee.bind(tangon)(kiloes);
                    kiloes = kiloes.Sizes;
                    kiloes = kiloes.XSMALL;
                    report['size'] = kiloes;
                    option = romeon[option];
                    option = yankee.bind(tangon)(option);
                    option = option.Colors;
                    option = option.GREEN;
                    report['color'] = option;
                    option = true;
                    report['disabled'] = option;
                    report = golfie.bind(tangon)(oscard, report);
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 367:
                    zuuluu = _closure1_slot43;
                    michal = _closure1_slot8;
                    entity = {};
                    output = _closure2_slot1;
                    report = output.buttonContainer;
                    entity['style'] = report;
                    golfie = _closure1_slot41;
                    romeon = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    yankee = 65;
                    report = kiloes[yankee];
                    oscard = romeon.bind(tangon)(report);
                    report = {};
                    option = output.spamButton;
                    report['style'] = option;
                    echoed = _closure1_slot0;
                    sizing = 36;
                    option = kiloes[sizing];
                    option = echoed.bind(tangon)(option);
                    update = option.intl;
                    result = update.string;
                    option = kiloes[sizing];
                    option = echoed.bind(tangon)(option);
                    option = option.t;
                    option = option.+WbSn5;
                    option = result.bind(update)(option);
                    report['text'] = option;
                    option = kiloes[yankee];
                    option = romeon.bind(tangon)(option);
                    option = option.Sizes;
                    option = option.XSMALL;
                    report['size'] = option;
                    option = kiloes[yankee];
                    option = romeon.bind(tangon)(option);
                    option = option.Colors;
                    option = option.GREEN;
                    report['color'] = option;
                    report['onPress'] = verify;
                    oscard = golfie.bind(tangon)(oscard, report);
                    report = new Array(2);
                    report[0] = oscard;
                    option = _closure1_slot41;
                    oscard = kiloes[yankee];
                    golfie = romeon.bind(tangon)(oscard);
                    oscard = {};
                    output = output.spamButton;
                    oscard['style'] = output;
                    output = kiloes[sizing];
                    output = echoed.bind(tangon)(output);
                    result = output.intl;
                    output = result.string;
                    sizing = kiloes[sizing];
                    sizing = echoed.bind(tangon)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.rQSndn;
                    sizing = output.bind(result)(sizing);
                    oscard['text'] = sizing;
                    sizing = kiloes[yankee];
                    sizing = romeon.bind(tangon)(sizing);
                    sizing = sizing.Sizes;
                    sizing = sizing.XSMALL;
                    oscard['size'] = sizing;
                    yankee = kiloes[yankee];
                    yankee = romeon.bind(tangon)(yankee);
                    yankee = yankee.Colors;
                    yankee = yankee.PRIMARY;
                    oscard['color'] = yankee;
                    offset = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 97;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.cancelFriendRequest;
                        michal = _closure2_slot3;
                        zuuluu = michal.id;
                        michal = {};
                        oscard = _closure1_slot26;
                        oscard = oscard.DM_CHANNEL;
                        michal['location'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    oscard['onPress'] = offset;
                    oscard = option.bind(tangon)(golfie, oscard);
                    report[1] = oscard;
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 710:
                    zuuluu = _closure1_slot41;
                    michal = _closure1_slot8;
                    entity = {};
                    report = _closure2_slot1;
                    report = report.buttonContainer;
                    entity['style'] = report;
                    report = _closure2_slot3;
                    oscard = report.bot;
                    report = null;
                    if(oscard) { _fun00050_ip = 929; continue _fun00049 }
 752:
                    option = _closure2_slot3;
                    oscard = option.isClyde;
                    oscard = oscard.bind(option)();
                    report = null;
                    if(oscard) { _fun00050_ip = 929; continue _fun00049 }
 774:
                    option = _closure1_slot41;
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    offset = 65;
                    oscard = romeon[offset];
                    golfie = yankee.bind(tangon)(oscard);
                    oscard = {};
                    backup = _closure2_slot1;
                    backup = backup.spamButton;
                    oscard['style'] = backup;
                    sizing = _closure1_slot0;
                    foxtra = 36;
                    backup = romeon[foxtra];
                    backup = sizing.bind(tangon)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.string;
                    foxtra = romeon[foxtra];
                    foxtra = sizing.bind(tangon)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.PMsq/f;
                    foxtra = backup.bind(kiloes)(foxtra);
                    oscard['text'] = foxtra;
                    foxtra = romeon[offset];
                    foxtra = yankee.bind(tangon)(foxtra);
                    foxtra = foxtra.Sizes;
                    foxtra = foxtra.XSMALL;
                    oscard['size'] = foxtra;
                    offset = romeon[offset];
                    offset = yankee.bind(tangon)(offset);
                    offset = offset.Colors;
                    offset = offset.GREEN;
                    oscard['color'] = offset;
                    oscard['onPress'] = verify;
                    report = option.bind(tangon)(golfie, oscard);
 929:
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 941:
                    entity = null;
                    return entity;
                }
            };
            offset = {};
            offset = kiloes.bind(report)(yankee, offset);
            oscard[6] = offset;
            option = entity == option;
            if(!option) { _fun00038_ip = 1630; continue _fun00037 }
 1618:
            yankee = foxtra.bot;
            offset = true;
            option = offset !== yankee;
 1630:
            if(!option) { _fun00038_ip = 1662; continue _fun00037 }
 1633:
            yankee = _closure1_slot41;
            offset = _closure1_slot57;
            verify = {};
            verify['channel'] = backup;
            verify['user'] = foxtra;
            verify['showingSpamBanner'] = romeon;
            option = yankee.bind(report)(offset, verify);
 1662:
            oscard[7] = option;
            oscard[8] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1682:
            return entity;
        }
    };
    var _closure1_slot52 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowSystemDM
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            kiloes = entity.channel;
            romeon = entity.showingSpamBanner;
            entity = _closure1_slot44;
            tangon = undefined;
            verify = entity.bind(tangon)();
            foxtra = _closure1_slot1;
            output = _closure1_slot2;
            entity = 49;
            entity = output[entity];
            entity = foxtra.bind(tangon)(entity);
            sizing = entity.bind(tangon)();
            zuuluu = _closure1_slot43;
            michal = _closure1_slot8;
            entity = {};
            report = verify.systemDMContainer;
            entity['style'] = report;
            golfie = _closure1_slot41;
            oscard = _closure1_slot8;
            report = {};
            option = verify.systemDMHeaderContainer;
            report['style'] = option;
            yankee = _closure1_slot41;
            offset = _closure1_slot52;
            option = {};
            option['channel'] = kiloes;
            option['showingSpamBanner'] = romeon;
            option = yankee.bind(tangon)(offset, option);
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot43;
            golfie = _closure1_slot8;
            oscard = {};
            verify = verify.systemDMImages;
            oscard['style'] = verify;
            offset = _closure1_slot41;
            romeon = _closure1_slot7;
            verify = {};
            yankee = 99;
            yankee = output[yankee];
            yankee = foxtra.bind(tangon)(yankee);
            verify['source'] = yankee;
            offset = offset.bind(tangon)(romeon, verify);
            verify = new Array(2);
            verify[0] = offset;
            yankee = _closure1_slot41;
            offset = {};
            kiloes = _closure1_slot0;
            foxtra = 100;
            foxtra = output[foxtra];
            kiloes = kiloes.bind(tangon)(foxtra);
            foxtra = kiloes.isThemeDark;
            foxtra = foxtra.bind(kiloes)(sizing);
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            if(foxtra) { _fun00054_ip = 252; continue _fun00053 }
 238:
            foxtra = 102;
            foxtra = sizing[foxtra];
            foxtra = kiloes.bind(tangon)(foxtra);
            _fun00054_ip = 264; continue _fun00053;
 252:
            backup = 101;
            backup = sizing[backup];
            foxtra = kiloes.bind(tangon)(backup);
 264:
            offset['source'] = foxtra;
            offset = yankee.bind(tangon)(romeon, offset);
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot53 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowButton
        michal = argFoo;
        offset = michal.title;
        verify = michal.subtitle;
        kiloes = michal.IconComponent;
        backup = michal.iconVariant;
        entity = michal.style;
        output = michal.onPress;
        option = michal.trailing;
        tangon = _closure1_slot41;
        zuuluu = _closure1_slot8;
        michal = {};
        michal['style'] = entity;
        golfie = _closure1_slot41;
        romeon = _closure1_slot0;
        sizing = _closure1_slot2;
        yankee = 103;
        report = sizing[yankee];
        entity = undefined;
        report = romeon.bind(entity)(report);
        oscard = report.RowButton;
        report = {};
        report['onPress'] = output;
        foxtra = _closure1_slot41;
        yankee = sizing[yankee];
        yankee = romeon.bind(entity)(yankee);
        yankee = yankee.RowButton;
        romeon = yankee.Icon;
        yankee = {};
        yankee['IconComponent'] = kiloes;
        yankee['variant'] = backup;
        yankee = foxtra.bind(entity)(romeon, yankee);
        report['icon'] = yankee;
        report['label'] = offset;
        report['subLabel'] = verify;
        report['trailing'] = option;
        report = golfie.bind(entity)(oscard, report);
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot54 = tangon;
    tangon = function(argFoo) { // Original name: ChatBeginningRowGroupDM
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            michal = argFoo;
            kiloes = michal.channel;
            var _closure2_slot0 = kiloes;
            michal = _closure1_slot44;
            tangon = undefined;
            source = michal.bind(tangon)();
            verify = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 45;
            michal = oscard[michal];
            michal = verify.bind(tangon)(michal);
            sequen = michal.bind(tangon)(kiloes);
            report = _closure1_slot5;
            michal = report.useState;
            yankee = false;
            golfie = michal.bind(report)(yankee);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(golfie, michal);
            michal = 0;
            result = zuuluu[michal];
            var _closure2_slot1 = result;
            michal = 1;
            foxtra = zuuluu[michal];
            var _closure2_slot2 = foxtra;
            option = _closure1_slot0;
            michal = 39;
            michal = oscard[michal];
            offset = option.bind(tangon)(michal);
            golfie = offset.useStateFromStores;
            michal = _closure1_slot22;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot22;
                entity = michal.getRelationshipCount;
                michal = entity.bind(michal)();
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            vacuum = golfie.bind(offset)(zuuluu, michal);
            golfie = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = kiloes;
            michal = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 104;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.navigateToNewGroupDM;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                michal = _closure1_slot27;
                michal = michal.CHANNEL_TEXT_AREA;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            michal = golfie.bind(report)(michal, zuuluu);
            var _closure2_slot3 = michal;
            offset = report.useCallback;
            golfie = _closure1_slot4;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00058_ip = 174; continue _fun00057 }
 10:
                        michal = _closure2_slot1;
                        if(michal) { _fun00058_ip = 169; continue _fun00057 }
 23:
                        tangon = _closure2_slot2;
                        report = undefined;
                        michal = true;
                        michal = tangon.bind(report)(michal);
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        michal = 105;
                        michal = golfie[michal];
                        option = oscard.bind(report)(michal);
                        golfie = option.mobileCreateInvite;
                        oscard = _closure2_slot0;
                        michal = _closure1_slot32;
                        michal = michal.GROUP_DM;
                        michal = golfie.bind(option)(oscard, michal);
                        SaveGenerator(address=89);
 87:
                        return michal;
 89:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscard) { _fun00058_ip = 166; continue _fun00057 }
 95:
                        oscard = null;
                        if(!(oscard != michal)) { _fun00058_ip = 153; continue _fun00057 }
 101:
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        oscard = 61;
                        oscard = option[oscard];
                        verify = golfie.bind(report)(oscard);
                        option = verify.handleCopy;
                        romeon = _closure2_slot0;
                        tangon = _closure1_slot32;
                        yankee = tangon.GROUP_DM;
                        offset = false;
                        backup = verify;
                        foxtra = michal;
                        tangon = backup[option](foxtra, romeon, yankee, offset, verify);
 153:
                        tangon = _closure2_slot2;
                        zuuluu = false;
                        zuuluu = tangon.bind(report)(zuuluu);
                        _fun00058_ip = 169; continue _fun00057;
 166:
                        return michal;
 169:
                        michal = undefined;
                        return michal;
 174:
                        return entity;
                    }
                };
                return entity;
            };
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = new Array(3);
            zuuluu[0] = kiloes;
            zuuluu[1] = result;
            zuuluu[2] = foxtra;
            golfie = offset.bind(report)(golfie, zuuluu);
            var _closure2_slot4 = golfie;
            offset = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 106;
                    zuuluu = golfie[entity];
                    entity = undefined;
                    report = oscard.bind(entity)(zuuluu);
                    tangon = report.isDismissibleContentDismissed;
                    zuuluu = 107;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.DismissibleContent;
                    zuuluu = zuuluu.GDM_INVITE_REMINDER;
                    zuuluu = tangon.bind(report)(zuuluu);
                    if(zuuluu) { _fun00060_ip = 104; continue _fun00059 }
 63:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 108;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = {};
                    tangon = _closure2_slot3;
                    michal['onClick'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    _fun00060_ip = 115; continue _fun00059;
 104:
                    michal = _closure2_slot3;
                    michal = michal.bind(entity)();
 115:
                    return entity;
                }
            };
            echoed = offset.bind(report)(michal, zuuluu);
            zuuluu = report.useCallback;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 106;
                    zuuluu = golfie[entity];
                    entity = undefined;
                    report = oscard.bind(entity)(zuuluu);
                    tangon = report.isDismissibleContentDismissed;
                    zuuluu = 107;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.DismissibleContent;
                    zuuluu = zuuluu.GDM_INVITE_REMINDER;
                    zuuluu = tangon.bind(report)(zuuluu);
                    if(zuuluu) { _fun00062_ip = 104; continue _fun00061 }
 63:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 108;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = {};
                    tangon = _closure2_slot4;
                    michal['onClick'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    _fun00062_ip = 115; continue _fun00061;
 104:
                    michal = _closure2_slot4;
                    michal = michal.bind(entity)();
 115:
                    return entity;
                }
            };
            output = zuuluu.bind(report)(entity, michal);
            michal = kiloes.id;
            entity = 109;
            entity = oscard[entity];
            entity = option.bind(tangon)(entity);
            entity = entity.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            golfie = michal === entity;
            zuuluu = _closure1_slot43;
            michal = _closure1_slot8;
            entity = {};
            report = source.centerHeader;
            entity['style'] = report;
            offset = _closure1_slot41;
            report = 110;
            report = oscard[report];
            verify = verify.bind(tangon)(report);
            report = {};
            foxtra = source.avatarRedesign;
            report['style'] = foxtra;
            report['channel'] = kiloes;
            foxtra = 93;
            foxtra = oscard[foxtra];
            foxtra = option.bind(tangon)(foxtra);
            foxtra = foxtra.AvatarSizes;
            foxtra = foxtra.XXLARGE;
            report['size'] = foxtra;
            report['accessible'] = yankee;
            verify = offset.bind(tangon)(verify, report);
            report = new Array(4);
            report[0] = verify;
            verify = _closure1_slot41;
            offset = 31;
            oscard = oscard[offset];
            oscard = option.bind(tangon)(oscard);
            option = oscard.Text;
            oscard = {};
            yankee = source.dmTitle;
            oscard['style'] = yankee;
            yankee = null;
            backup = yankee != sequen;
            sizing = 'heading-xxl/extrabold';
            foxtra = sizing;
            if(!backup) { _fun00056_ip = 478; continue _fun00055 }
 454:
            update = sequen.length;
            backup = 40;
            backup = update > backup;
            foxtra = sizing;
            if(!backup) { _fun00056_ip = 478; continue _fun00055 }
 472:
            foxtra = 'heading-lg/extrabold';
 478:
            oscard['variant'] = foxtra;
            foxtra = 'header-primary';
            oscard['color'] = foxtra;
            oscard['children'] = sequen;
            oscard = verify.bind(tangon)(option, oscard);
            report[1] = oscard;
            verify = _closure1_slot41;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            oscard = option.bind(tangon)(oscard);
            option = oscard.Text;
            oscard = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            offset = source.gdmText;
            oscard['style'] = offset;
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            ctrled = 36;
            offset = foxtra[ctrled];
            offset = backup.bind(tangon)(offset);
            update = offset.intl;
            if(golfie) { _fun00056_ip = 620; continue _fun00055 }
 586:
            sizing = update.string;
            offset = foxtra[ctrled];
            offset = backup.bind(tangon)(offset);
            offset = offset.t;
            offset = offset.0Q7uk5;
            offset = sizing.bind(update)(offset);
            _fun00056_ip = 659; continue _fun00055;
 620:
            sizing = update.format;
            foxtra = foxtra[ctrled];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            backup = foxtra.MFwcqK;
            foxtra = {};
            foxtra['name'] = sequen;
            offset = sizing.bind(update)(backup, foxtra);
 659:
            oscard['children'] = offset;
            oscard = verify.bind(tangon)(option, oscard);
            report[2] = oscard;
            oscard = null;
            if(golfie) { _fun00056_ip = 1116; continue _fun00055 }
 681:
            verify = _closure1_slot43;
            option = _closure1_slot42;
            golfie = {};
            foxtra = null;
            if(!vacuum) { _fun00056_ip = 814; continue _fun00055 }
 696:
            sizing = _closure1_slot41;
            backup = _closure1_slot54;
            offset = {};
            update = source.gdmInviteFriends;
            offset['style'] = update;
            offset['onPress'] = echoed;
            config = _closure1_slot0;
            echoed = _closure1_slot2;
            update = 111;
            update = echoed[update];
            update = config.bind(tangon)(update);
            update = update.GroupPlusIcon;
            offset['IconComponent'] = update;
            update = 'blurple';
            offset['iconVariant'] = update;
            update = echoed[ctrled];
            update = config.bind(tangon)(update);
            sequen = update.intl;
            update = sequen.string;
            echoed = echoed[ctrled];
            echoed = config.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.LR+Ptb;
            echoed = update.bind(sequen)(echoed);
            offset['title'] = echoed;
            foxtra = sizing.bind(tangon)(backup, offset);
 814:
            offset = new Array(3);
            offset[0] = foxtra;
            sizing = _closure1_slot41;
            backup = _closure1_slot54;
            foxtra = {};
            update = source.gdmShareInviteLink;
            echoed = new Array(2);
            echoed[0] = update;
            update = null;
            if(vacuum) { _fun00056_ip = 857; continue _fun00055 }
 851:
            update = source.gdmShareInviteLinkNoRelationships;
 857:
            echoed[1] = update;
            foxtra['style'] = echoed;
            foxtra['onPress'] = output;
            source = _closure1_slot0;
            output = _closure1_slot2;
            echoed = 112;
            echoed = output[echoed];
            echoed = source.bind(tangon)(echoed);
            echoed = echoed.LinkIcon;
            foxtra['IconComponent'] = echoed;
            echoed = output[ctrled];
            echoed = source.bind(tangon)(echoed);
            vacuum = echoed.intl;
            update = vacuum.string;
            echoed = output[ctrled];
            echoed = source.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.3XVNys;
            echoed = update.bind(vacuum)(echoed);
            foxtra['title'] = echoed;
            echoed = output[ctrled];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            output = output[ctrled];
            output = source.bind(tangon)(output);
            output = output.t;
            output = output.qa9CQk;
            output = echoed.bind(update)(output);
            foxtra['subtitle'] = output;
            output = null;
            if(!result) { _fun00056_ip = 1020; continue _fun00055 }
 1004:
            update = _closure1_slot41;
            echoed = _closure1_slot6;
            result = {};
            output = update.bind(tangon)(echoed, result);
 1020:
            foxtra['trailing'] = output;
            foxtra = sizing.bind(tangon)(backup, foxtra);
            offset[1] = foxtra;
            backup = kiloes.hasFlag;
            foxtra = _closure1_slot37;
            foxtra = foxtra.IS_JOIN_REQUEST_INTERVIEW_CHANNEL;
            foxtra = backup.bind(kiloes)(foxtra);
            yankee = null;
            if(!foxtra) { _fun00056_ip = 1102; continue _fun00055 }
 1061:
            backup = _closure1_slot41;
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            romeon = 113;
            romeon = sizing[romeon];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = {};
            kiloes = kiloes.id;
            romeon['channelId'] = kiloes;
            yankee = backup.bind(tangon)(foxtra, romeon);
 1102:
            offset[2] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1116:
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot55 = tangon;
    tangon = 116;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/chat/ChatBeginningRow.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.channelId;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.guildId;
            var _closure2_slot1 = zuuluu;
            zuuluu = michal.shouldRender;
            offset = michal.showingSpamBanner;
            michal = _closure1_slot44;
            tangon = undefined;
            verify = michal.bind(tangon)();
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 39;
            golfie = oscard[michal];
            foxtra = option.bind(tangon)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot17;
            yankee = new Array(1);
            yankee[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot17;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = romeon.bind(foxtra)(yankee, golfie);
            michal = oscard[michal];
            yankee = option.bind(tangon)(michal);
            option = yankee.useStateFromStores;
            romeon = _closure1_slot20;
            michal = new Array(1);
            michal[0] = romeon;
            entity = function() {
                zuuluu = _closure1_slot20;
                michal = zuuluu.getGuild;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = option.bind(yankee)(michal, entity);
            michal = _closure1_slot1;
            entity = 114;
            entity = oscard[entity];
            romeon = michal.bind(tangon)(entity);
            option = romeon.useExperiment;
            oscard = {};
            entity = 'b606a2_1';
            oscard['location'] = entity;
            michal = {};
            entity = null;
            foxtra = entity == golfie;
            backup = undefined;
            if(foxtra) { _fun00064_ip = 194; continue _fun00063 }
 184:
            foxtra = golfie.isSystemDM;
            backup = foxtra.bind(golfie)();
 194:
            foxtra = entity != backup;
            if(!foxtra) { _fun00064_ip = 204; continue _fun00063 }
 201:
            foxtra = backup;
 204:
            michal['autoTrackExposure'] = foxtra;
            michal = option.bind(romeon)(oscard, michal);
            michal = michal.systemDMRedesignEnabled;
            if(!zuuluu) { _fun00064_ip = 228; continue _fun00063 }
 224:
            zuuluu = entity != golfie;
 228:
            option = null;
            if(!zuuluu) { _fun00064_ip = 450; continue _fun00063 }
 236:
            romeon = _closure1_slot14;
            oscard = romeon.has;
            zuuluu = golfie.type;
            zuuluu = oscard.bind(romeon)(zuuluu);
            if(zuuluu) { _fun00064_ip = 427; continue _fun00063 }
 261:
            zuuluu = golfie.isDM;
            zuuluu = zuuluu.bind(golfie)();
            if(!zuuluu) { _fun00064_ip = 290; continue _fun00063 }
 274:
            zuuluu = golfie.isSystemDM;
            zuuluu = zuuluu.bind(golfie)();
            if(!zuuluu) { _fun00064_ip = 290; continue _fun00063 }
 287:
            if(michal) { _fun00064_ip = 400; continue _fun00063 }
 290:
            michal = golfie.isDM;
            michal = michal.bind(golfie)();
            if(michal) { _fun00064_ip = 373; continue _fun00063 }
 303:
            michal = golfie.isGroupDM;
            michal = michal.bind(golfie)();
            if(michal) { _fun00064_ip = 351; continue _fun00063 }
 316:
            michal = entity != yankee;
            entity = null;
            if(!michal) { _fun00064_ip = 349; continue _fun00063 }
 325:
            oscard = _closure1_slot41;
            zuuluu = _closure1_slot50;
            michal = {};
            michal['guild'] = yankee;
            michal['channel'] = golfie;
            entity = oscard.bind(tangon)(zuuluu, michal);
 349:
            _fun00064_ip = 371; continue _fun00063;
 351:
            oscard = _closure1_slot41;
            zuuluu = _closure1_slot55;
            michal = {};
            michal['channel'] = golfie;
            entity = oscard.bind(tangon)(zuuluu, michal);
 371:
            _fun00064_ip = 398; continue _fun00063;
 373:
            oscard = _closure1_slot41;
            zuuluu = _closure1_slot52;
            michal = {};
            michal['channel'] = golfie;
            michal['showingSpamBanner'] = offset;
            entity = oscard.bind(tangon)(zuuluu, michal);
 398:
            _fun00064_ip = 425; continue _fun00063;
 400:
            oscard = _closure1_slot41;
            zuuluu = _closure1_slot53;
            michal = {};
            michal['channel'] = golfie;
            michal['showingSpamBanner'] = offset;
            entity = oscard.bind(tangon)(zuuluu, michal);
 425:
            _fun00064_ip = 447; continue _fun00063;
 427:
            oscard = _closure1_slot41;
            zuuluu = _closure1_slot48;
            michal = {};
            michal['channel'] = golfie;
            entity = oscard.bind(tangon)(zuuluu, michal);
 447:
            option = entity;
 450:
            zuuluu = _closure1_slot41;
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 115;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.RedesignCompat;
            entity = {};
            golfie = _closure1_slot41;
            oscard = _closure1_slot8;
            report = {};
            offset = false;
            report['collapsable'] = offset;
            verify = verify.container;
            report['style'] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();