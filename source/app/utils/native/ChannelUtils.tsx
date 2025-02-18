// app/utils/native/ChannelUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: getThreadChannelIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot7;
            michal = michal.PRIVATE_THREAD;
            if(!(michal !== zuuluu)) { _fun00002_ip = 76; continue _fun00001 }
 20:
            michal = _closure1_slot7;
            michal = michal.ANNOUNCEMENT_THREAD;
            if(!(michal !== zuuluu)) { _fun00002_ip = 52; continue _fun00001 }
 34:
            michal = _closure1_slot7;
            michal = michal.PUBLIC_THREAD;
            if(!(michal !== zuuluu)) { _fun00002_ip = 52; continue _fun00001 }
 48:
            michal = null;
            return michal;
 52:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            return michal;
 76:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    var _closure1_slot8 = oscard;
    report = function(argFoo, argBar) { // Original name: getChannelIcon
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            option = null;
            entity = oscard;
            if(!(option == entity)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            entity = {};
 17:
            report = entity.isRulesChannel;
            yankee = entity.textFocused;
            verify = entity.locked;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 21;
            michal = zuuluu[michal];
            zuuluu = undefined;
            romeon = golfie.bind(zuuluu)(michal);
            offset = romeon.shouldShowMembershipVerificationGate;
            golfie = tangon.guild_id;
            foxtra = _closure1_slot4;
            michal = new Array(4);
            michal[0] = foxtra;
            foxtra = _closure1_slot5;
            michal[1] = foxtra;
            foxtra = _closure1_slot6;
            michal[2] = foxtra;
            foxtra = _closure1_slot3;
            michal[3] = foxtra;
            golfie = offset.bind(romeon)(golfie, michal);
            michal = tangon.isForumPost;
            michal = michal.bind(tangon)();
            if(michal) { _fun00004_ip = 1721; continue _fun00003 }
 129:
            offset = _closure1_slot8;
            michal = tangon.type;
            michal = offset.bind(zuuluu)(michal);
            if(!(option == michal)) { _fun00004_ip = 1719; continue _fun00003 }
 150:
            offset = tangon.isMediaChannel;
            offset = offset.bind(tangon)();
            foxtra = tangon.type;
            romeon = _closure1_slot7;
            romeon = romeon.PRIVATE_THREAD;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1703; continue _fun00003 }
 182:
            romeon = _closure1_slot7;
            romeon = romeon.ANNOUNCEMENT_THREAD;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1703; continue _fun00003 }
 199:
            romeon = _closure1_slot7;
            romeon = romeon.PUBLIC_THREAD;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1703; continue _fun00003 }
 216:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_CATEGORY;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1681; continue _fun00003 }
 233:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_TEXT;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1482; continue _fun00003 }
 250:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_FORUM;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1282; continue _fun00003 }
 267:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_MEDIA;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1118; continue _fun00003 }
 284:
            romeon = _closure1_slot7;
            romeon = romeon.GROUP_DM;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1096; continue _fun00003 }
 301:
            romeon = _closure1_slot7;
            romeon = romeon.DM;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1074; continue _fun00003 }
 318:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_ANNOUNCEMENT;
            if(!(romeon !== foxtra)) { _fun00004_ip = 910; continue _fun00003 }
 335:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_STAGE_VOICE;
            if(!(romeon !== foxtra)) { _fun00004_ip = 698; continue _fun00003 }
 352:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_VOICE;
            if(!(romeon !== foxtra)) { _fun00004_ip = 404; continue _fun00003 }
 366:
            romeon = _closure1_slot7;
            romeon = romeon.GUILD_DIRECTORY;
            if(!(romeon !== foxtra)) { _fun00004_ip = 382; continue _fun00003 }
 380:
            return option;
 382:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 14;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            return romeon;
 404:
            if(yankee) { _fun00004_ip = 676; continue _fun00003 }
 410:
            if(!golfie) { _fun00004_ip = 493; continue _fun00003 }
 413:
            if(!(option != oscard)) { _fun00004_ip = 426; continue _fun00003 }
 417:
            yankee = oscard.ignoreTraits;
            if(yankee) { _fun00004_ip = 493; continue _fun00003 }
 426:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 24;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.bind(zuuluu)(tangon);
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            if(yankee) { _fun00004_ip = 476; continue _fun00003 }
 462:
            yankee = 15;
            yankee = backup[yankee];
            yankee = foxtra.bind(zuuluu)(yankee);
            _fun00004_ip = 488; continue _fun00003;
 476:
            romeon = 32;
            romeon = backup[romeon];
            yankee = foxtra.bind(zuuluu)(romeon);
 488:
            _fun00004_ip = 674; continue _fun00003;
 493:
            if(!verify) { _fun00004_ip = 534; continue _fun00003 }
 496:
            if(!(option != oscard)) { _fun00004_ip = 509; continue _fun00003 }
 500:
            romeon = oscard.ignoreTraits;
            if(romeon) { _fun00004_ip = 534; continue _fun00003 }
 509:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 32;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            _fun00004_ip = 671; continue _fun00003;
 534:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 24;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            foxtra = foxtra.bind(zuuluu)(tangon);
            if(!foxtra) { _fun00004_ip = 597; continue _fun00003 }
 562:
            if(!(option != oscard)) { _fun00004_ip = 575; continue _fun00003 }
 566:
            foxtra = oscard.ignoreTraits;
            if(foxtra) { _fun00004_ip = 597; continue _fun00003 }
 575:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 15;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            _fun00004_ip = 668; continue _fun00003;
 597:
            backup = tangon.isNSFW;
            backup = backup.bind(tangon)();
            if(!backup) { _fun00004_ip = 645; continue _fun00003 }
 610:
            if(!(option != oscard)) { _fun00004_ip = 623; continue _fun00003 }
 614:
            backup = oscard.ignoreTraits;
            if(backup) { _fun00004_ip = 645; continue _fun00003 }
 623:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 33;
            backup = sizing[backup];
            backup = kiloes.bind(zuuluu)(backup);
            _fun00004_ip = 665; continue _fun00003;
 645:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 13;
            kiloes = output[kiloes];
            backup = sizing.bind(zuuluu)(kiloes);
 665:
            foxtra = backup;
 668:
            romeon = foxtra;
 671:
            yankee = romeon;
 674:
            _fun00004_ip = 696; continue _fun00003;
 676:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 17;
            romeon = backup[romeon];
            yankee = foxtra.bind(zuuluu)(romeon);
 696:
            return yankee;
 698:
            if(!golfie) { _fun00004_ip = 781; continue _fun00003 }
 701:
            if(!(option != oscard)) { _fun00004_ip = 714; continue _fun00003 }
 705:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 781; continue _fun00003 }
 714:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 24;
            golfie = romeon[golfie];
            golfie = yankee.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(tangon);
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            if(golfie) { _fun00004_ip = 764; continue _fun00003 }
 750:
            golfie = 16;
            golfie = foxtra[golfie];
            golfie = romeon.bind(zuuluu)(golfie);
            _fun00004_ip = 776; continue _fun00003;
 764:
            yankee = 32;
            yankee = foxtra[yankee];
            golfie = romeon.bind(zuuluu)(yankee);
 776:
            _fun00004_ip = 908; continue _fun00003;
 781:
            if(!verify) { _fun00004_ip = 819; continue _fun00003 }
 784:
            if(!(option != oscard)) { _fun00004_ip = 797; continue _fun00003 }
 788:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 819; continue _fun00003 }
 797:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 32;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 905; continue _fun00003;
 819:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 24;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.bind(zuuluu)(tangon);
            if(!yankee) { _fun00004_ip = 882; continue _fun00003 }
 847:
            if(!(option != oscard)) { _fun00004_ip = 860; continue _fun00003 }
 851:
            yankee = oscard.ignoreTraits;
            if(yankee) { _fun00004_ip = 882; continue _fun00003 }
 860:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 16;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            _fun00004_ip = 902; continue _fun00003;
 882:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 12;
            romeon = backup[romeon];
            yankee = foxtra.bind(zuuluu)(romeon);
 902:
            verify = yankee;
 905:
            golfie = verify;
 908:
            return golfie;
 910:
            if(report) { _fun00004_ip = 1052; continue _fun00003 }
 916:
            golfie = tangon.isNSFW;
            golfie = golfie.bind(tangon)();
            if(!golfie) { _fun00004_ip = 964; continue _fun00003 }
 929:
            if(!(option != oscard)) { _fun00004_ip = 942; continue _fun00003 }
 933:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 964; continue _fun00003 }
 942:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 30;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            _fun00004_ip = 1050; continue _fun00003;
 964:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 24;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(tangon);
            if(!verify) { _fun00004_ip = 1027; continue _fun00003 }
 992:
            if(!(option != oscard)) { _fun00004_ip = 1005; continue _fun00003 }
 996:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1027; continue _fun00003 }
 1005:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 31;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 1047; continue _fun00003;
 1027:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 11;
            yankee = foxtra[yankee];
            verify = romeon.bind(zuuluu)(yankee);
 1047:
            golfie = verify;
 1050:
            _fun00004_ip = 1072; continue _fun00003;
 1052:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 22;
            verify = romeon[verify];
            golfie = yankee.bind(zuuluu)(verify);
 1072:
            return golfie;
 1074:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 10;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            return golfie;
 1096:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 9;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            return golfie;
 1118:
            if(report) { _fun00004_ip = 1260; continue _fun00003 }
 1124:
            golfie = tangon.isNSFW;
            golfie = golfie.bind(tangon)();
            if(!golfie) { _fun00004_ip = 1172; continue _fun00003 }
 1137:
            if(!(option != oscard)) { _fun00004_ip = 1150; continue _fun00003 }
 1141:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 1172; continue _fun00003 }
 1150:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 26;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            _fun00004_ip = 1258; continue _fun00003;
 1172:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 24;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(tangon);
            if(!verify) { _fun00004_ip = 1235; continue _fun00003 }
 1200:
            if(!(option != oscard)) { _fun00004_ip = 1213; continue _fun00003 }
 1204:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1235; continue _fun00003 }
 1213:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 28;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 1255; continue _fun00003;
 1235:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 19;
            yankee = foxtra[yankee];
            verify = romeon.bind(zuuluu)(yankee);
 1255:
            golfie = verify;
 1258:
            _fun00004_ip = 1280; continue _fun00003;
 1260:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 22;
            verify = romeon[verify];
            golfie = yankee.bind(zuuluu)(verify);
 1280:
            return golfie;
 1282:
            if(report) { _fun00004_ip = 1460; continue _fun00003 }
 1288:
            golfie = tangon.isNSFW;
            golfie = golfie.bind(tangon)();
            if(!golfie) { _fun00004_ip = 1348; continue _fun00003 }
 1301:
            if(!(option != oscard)) { _fun00004_ip = 1314; continue _fun00003 }
 1305:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 1348; continue _fun00003 }
 1314:
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            if(offset) { _fun00004_ip = 1334; continue _fun00003 }
 1325:
            golfie = 27;
            golfie = romeon[golfie];
            _fun00004_ip = 1341; continue _fun00003;
 1334:
            yankee = 26;
            golfie = romeon[yankee];
 1341:
            golfie = verify.bind(zuuluu)(golfie);
            _fun00004_ip = 1458; continue _fun00003;
 1348:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 24;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(tangon);
            if(!verify) { _fun00004_ip = 1423; continue _fun00003 }
 1376:
            if(!(option != oscard)) { _fun00004_ip = 1389; continue _fun00003 }
 1380:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1423; continue _fun00003 }
 1389:
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            if(offset) { _fun00004_ip = 1409; continue _fun00003 }
 1400:
            verify = 29;
            verify = foxtra[verify];
            _fun00004_ip = 1416; continue _fun00003;
 1409:
            romeon = 28;
            verify = foxtra[romeon];
 1416:
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 1455; continue _fun00003;
 1423:
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            if(offset) { _fun00004_ip = 1443; continue _fun00003 }
 1434:
            offset = 18;
            offset = foxtra[offset];
            _fun00004_ip = 1450; continue _fun00003;
 1443:
            romeon = 19;
            offset = foxtra[romeon];
 1450:
            verify = yankee.bind(zuuluu)(offset);
 1455:
            golfie = verify;
 1458:
            _fun00004_ip = 1480; continue _fun00003;
 1460:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 22;
            verify = yankee[verify];
            golfie = offset.bind(zuuluu)(verify);
 1480:
            return golfie;
 1482:
            if(report) { _fun00004_ip = 1659; continue _fun00003 }
 1488:
            report = tangon.isNSFW;
            report = report.bind(tangon)();
            if(!report) { _fun00004_ip = 1536; continue _fun00003 }
 1501:
            if(!(option != oscard)) { _fun00004_ip = 1514; continue _fun00003 }
 1505:
            report = oscard.ignoreTraits;
            if(report) { _fun00004_ip = 1536; continue _fun00003 }
 1514:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            report = 23;
            report = verify[report];
            report = golfie.bind(zuuluu)(report);
            _fun00004_ip = 1657; continue _fun00003;
 1536:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golfie = 24;
            golfie = offset[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(tangon);
            if(!golfie) { _fun00004_ip = 1599; continue _fun00003 }
 1564:
            if(!(option != oscard)) { _fun00004_ip = 1577; continue _fun00003 }
 1568:
            oscard = oscard.ignoreTraits;
            if(oscard) { _fun00004_ip = 1599; continue _fun00003 }
 1577:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 20;
            oscard = verify[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            _fun00004_ip = 1654; continue _fun00003;
 1599:
            golfie = tangon.linkedLobby;
            if(!(option == golfie)) { _fun00004_ip = 1631; continue _fun00003 }
 1609:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 8;
            golfie = verify[golfie];
            golfie = option.bind(zuuluu)(golfie);
            _fun00004_ip = 1651; continue _fun00003;
 1631:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 25;
            option = offset[option];
            golfie = verify.bind(zuuluu)(option);
 1651:
            oscard = golfie;
 1654:
            report = oscard;
 1657:
            _fun00004_ip = 1679; continue _fun00003;
 1659:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 22;
            oscard = option[oscard];
            report = golfie.bind(zuuluu)(oscard);
 1679:
            return report;
 1681:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 7;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            return report;
 1703:
            report = _closure1_slot8;
            tangon = tangon.type;
            tangon = report.bind(zuuluu)(tangon);
            return tangon;
 1719:
            return michal;
 1721:
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 17;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tangon = function(argFoo, argBar) { // Original name: getChannelIconComponent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            oscard = null;
            entity = tangon;
            if(!(oscard == entity)) { _fun00006_ip = 17; continue _fun00005 }
 15:
            entity = {};
 17:
            michal = entity.isRulesChannel;
            offset = entity.textFocused;
            option = entity.locked;
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 21;
            golfie = golfie[zuuluu];
            zuuluu = undefined;
            romeon = verify.bind(zuuluu)(golfie);
            yankee = romeon.shouldShowMembershipVerificationGate;
            verify = report.guild_id;
            foxtra = _closure1_slot4;
            golfie = new Array(4);
            golfie[0] = foxtra;
            foxtra = _closure1_slot5;
            golfie[1] = foxtra;
            foxtra = _closure1_slot6;
            golfie[2] = foxtra;
            foxtra = _closure1_slot3;
            golfie[3] = foxtra;
            golfie = yankee.bind(romeon)(verify, golfie);
            verify = report.isForumPost;
            verify = verify.bind(report)();
            if(verify) { _fun00006_ip = 1978; continue _fun00005 }
 129:
            verify = report.isMediaChannel;
            verify = verify.bind(report)();
            romeon = report.type;
            yankee = _closure1_slot7;
            yankee = yankee.PRIVATE_THREAD;
            if(!(yankee !== romeon)) { _fun00006_ip = 1950; continue _fun00005 }
 161:
            yankee = _closure1_slot7;
            yankee = yankee.ANNOUNCEMENT_THREAD;
            if(!(yankee !== romeon)) { _fun00006_ip = 1922; continue _fun00005 }
 178:
            yankee = _closure1_slot7;
            yankee = yankee.PUBLIC_THREAD;
            if(!(yankee !== romeon)) { _fun00006_ip = 1922; continue _fun00005 }
 195:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_CATEGORY;
            if(!(yankee !== romeon)) { _fun00006_ip = 1894; continue _fun00005 }
 212:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_TEXT;
            if(!(yankee !== romeon)) { _fun00006_ip = 1662; continue _fun00005 }
 229:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_FORUM;
            if(!(yankee !== romeon)) { _fun00006_ip = 1399; continue _fun00005 }
 246:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_MEDIA;
            if(!(yankee !== romeon)) { _fun00006_ip = 1211; continue _fun00005 }
 263:
            yankee = _closure1_slot7;
            yankee = yankee.GROUP_DM;
            if(!(yankee !== romeon)) { _fun00006_ip = 1183; continue _fun00005 }
 280:
            yankee = _closure1_slot7;
            yankee = yankee.DM;
            if(!(yankee !== romeon)) { _fun00006_ip = 1155; continue _fun00005 }
 297:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_ANNOUNCEMENT;
            if(!(yankee !== romeon)) { _fun00006_ip = 967; continue _fun00005 }
 314:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_STAGE_VOICE;
            if(!(yankee !== romeon)) { _fun00006_ip = 725; continue _fun00005 }
 331:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_VOICE;
            if(!(yankee !== romeon)) { _fun00006_ip = 389; continue _fun00005 }
 345:
            yankee = _closure1_slot7;
            yankee = yankee.GUILD_DIRECTORY;
            if(!(yankee !== romeon)) { _fun00006_ip = 361; continue _fun00005 }
 359:
            return zuuluu;
 361:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 60;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.HubIcon;
            return yankee;
 389:
            if(offset) { _fun00006_ip = 697; continue _fun00005 }
 395:
            if(!golfie) { _fun00006_ip = 490; continue _fun00005 }
 398:
            if(!(oscard != tangon)) { _fun00006_ip = 411; continue _fun00005 }
 402:
            offset = tangon.ignoreTraits;
            if(offset) { _fun00006_ip = 490; continue _fun00005 }
 411:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 24;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(report);
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            if(offset) { _fun00006_ip = 467; continue _fun00005 }
 447:
            offset = 57;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            offset = offset.VoiceLockIcon;
            _fun00006_ip = 485; continue _fun00005;
 467:
            yankee = 54;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            offset = yankee.LockIcon;
 485:
            _fun00006_ip = 695; continue _fun00005;
 490:
            if(!option) { _fun00006_ip = 537; continue _fun00005 }
 493:
            if(!(oscard != tangon)) { _fun00006_ip = 506; continue _fun00005 }
 497:
            yankee = tangon.ignoreTraits;
            if(yankee) { _fun00006_ip = 537; continue _fun00005 }
 506:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 54;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.LockIcon;
            _fun00006_ip = 692; continue _fun00005;
 537:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 24;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.bind(zuuluu)(report);
            if(!romeon) { _fun00006_ip = 606; continue _fun00005 }
 565:
            if(!(oscard != tangon)) { _fun00006_ip = 578; continue _fun00005 }
 569:
            romeon = tangon.ignoreTraits;
            if(romeon) { _fun00006_ip = 606; continue _fun00005 }
 578:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 57;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.VoiceLockIcon;
            _fun00006_ip = 689; continue _fun00005;
 606:
            foxtra = report.isNSFW;
            foxtra = foxtra.bind(report)();
            if(!foxtra) { _fun00006_ip = 660; continue _fun00005 }
 619:
            if(!(oscard != tangon)) { _fun00006_ip = 632; continue _fun00005 }
 623:
            foxtra = tangon.ignoreTraits;
            if(foxtra) { _fun00006_ip = 660; continue _fun00005 }
 632:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 58;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            foxtra = foxtra.VoiceWarningIcon;
            _fun00006_ip = 686; continue _fun00005;
 660:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            backup = 59;
            backup = sizing[backup];
            backup = kiloes.bind(zuuluu)(backup);
            foxtra = backup.VoiceNormalIcon;
 686:
            romeon = foxtra;
 689:
            yankee = romeon;
 692:
            offset = yankee;
 695:
            _fun00006_ip = 723; continue _fun00005;
 697:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 34;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            offset = yankee.ChatIcon;
 723:
            return offset;
 725:
            if(!golfie) { _fun00006_ip = 820; continue _fun00005 }
 728:
            if(!(oscard != tangon)) { _fun00006_ip = 741; continue _fun00005 }
 732:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 820; continue _fun00005 }
 741:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 24;
            golfie = yankee[golfie];
            golfie = offset.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(report);
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            if(golfie) { _fun00006_ip = 797; continue _fun00005 }
 777:
            golfie = 55;
            golfie = romeon[golfie];
            golfie = yankee.bind(zuuluu)(golfie);
            golfie = golfie.StageLockIcon;
            _fun00006_ip = 815; continue _fun00005;
 797:
            offset = 54;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            golfie = offset.LockIcon;
 815:
            _fun00006_ip = 965; continue _fun00005;
 820:
            if(!option) { _fun00006_ip = 864; continue _fun00005 }
 823:
            if(!(oscard != tangon)) { _fun00006_ip = 836; continue _fun00005 }
 827:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 864; continue _fun00005 }
 836:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 54;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.LockIcon;
            _fun00006_ip = 962; continue _fun00005;
 864:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 24;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(report);
            if(!offset) { _fun00006_ip = 933; continue _fun00005 }
 892:
            if(!(oscard != tangon)) { _fun00006_ip = 905; continue _fun00005 }
 896:
            offset = tangon.ignoreTraits;
            if(offset) { _fun00006_ip = 933; continue _fun00005 }
 905:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 55;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            offset = offset.StageLockIcon;
            _fun00006_ip = 959; continue _fun00005;
 933:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 56;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            offset = yankee.StageIcon;
 959:
            option = offset;
 962:
            golfie = option;
 965:
            return golfie;
 967:
            if(michal) { _fun00006_ip = 1127; continue _fun00005 }
 973:
            golfie = report.isNSFW;
            golfie = golfie.bind(report)();
            if(!golfie) { _fun00006_ip = 1027; continue _fun00005 }
 986:
            if(!(oscard != tangon)) { _fun00006_ip = 999; continue _fun00005 }
 990:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 1027; continue _fun00005 }
 999:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 51;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.AnnouncementsWarningIcon;
            _fun00006_ip = 1125; continue _fun00005;
 1027:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 24;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.bind(zuuluu)(report);
            if(!option) { _fun00006_ip = 1096; continue _fun00005 }
 1055:
            if(!(oscard != tangon)) { _fun00006_ip = 1068; continue _fun00005 }
 1059:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1096; continue _fun00005 }
 1068:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 52;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.AnnouncementsLockIcon;
            _fun00006_ip = 1122; continue _fun00005;
 1096:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 53;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            option = offset.AnnouncementsIcon;
 1122:
            golfie = option;
 1125:
            _fun00006_ip = 1153; continue _fun00005;
 1127:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 38;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            golfie = option.BookCheckIcon;
 1153:
            return golfie;
 1155:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 50;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.AtIcon;
            return golfie;
 1183:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 49;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.GroupIcon;
            return golfie;
 1211:
            if(michal) { _fun00006_ip = 1371; continue _fun00005 }
 1217:
            golfie = report.isNSFW;
            golfie = golfie.bind(report)();
            if(!golfie) { _fun00006_ip = 1271; continue _fun00005 }
 1230:
            if(!(oscard != tangon)) { _fun00006_ip = 1243; continue _fun00005 }
 1234:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 1271; continue _fun00005 }
 1243:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 43;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.ImageWarningIcon;
            _fun00006_ip = 1369; continue _fun00005;
 1271:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 24;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.bind(zuuluu)(report);
            if(!option) { _fun00006_ip = 1340; continue _fun00005 }
 1299:
            if(!(oscard != tangon)) { _fun00006_ip = 1312; continue _fun00005 }
 1303:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1340; continue _fun00005 }
 1312:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 45;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.ImageLockIcon;
            _fun00006_ip = 1366; continue _fun00005;
 1340:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 47;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            option = offset.ImageIcon;
 1366:
            golfie = option;
 1369:
            _fun00006_ip = 1397; continue _fun00005;
 1371:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 38;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            golfie = option.BookCheckIcon;
 1397:
            return golfie;
 1399:
            if(michal) { _fun00006_ip = 1634; continue _fun00005 }
 1405:
            golfie = report.isNSFW;
            golfie = golfie.bind(report)();
            if(!golfie) { _fun00006_ip = 1485; continue _fun00005 }
 1418:
            if(!(oscard != tangon)) { _fun00006_ip = 1431; continue _fun00005 }
 1422:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 1485; continue _fun00005 }
 1431:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            if(verify) { _fun00006_ip = 1462; continue _fun00005 }
 1442:
            golfie = 44;
            golfie = yankee[golfie];
            golfie = offset.bind(zuuluu)(golfie);
            golfie = golfie.ForumWarningIcon;
            _fun00006_ip = 1480; continue _fun00005;
 1462:
            option = 43;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            golfie = option.ImageWarningIcon;
 1480:
            _fun00006_ip = 1632; continue _fun00005;
 1485:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 24;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.bind(zuuluu)(report);
            if(!option) { _fun00006_ip = 1577; continue _fun00005 }
 1513:
            if(!(oscard != tangon)) { _fun00006_ip = 1526; continue _fun00005 }
 1517:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1577; continue _fun00005 }
 1526:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            if(verify) { _fun00006_ip = 1557; continue _fun00005 }
 1537:
            option = 46;
            option = romeon[option];
            option = yankee.bind(zuuluu)(option);
            option = option.ForumLockIcon;
            _fun00006_ip = 1575; continue _fun00005;
 1557:
            offset = 45;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            option = offset.ImageLockIcon;
 1575:
            _fun00006_ip = 1629; continue _fun00005;
 1577:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            if(verify) { _fun00006_ip = 1608; continue _fun00005 }
 1588:
            verify = 48;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.ForumIcon;
            _fun00006_ip = 1626; continue _fun00005;
 1608:
            offset = 47;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            verify = offset.ImageIcon;
 1626:
            option = verify;
 1629:
            golfie = option;
 1632:
            _fun00006_ip = 1660; continue _fun00005;
 1634:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 38;
            option = offset[option];
            option = verify.bind(zuuluu)(option);
            golfie = option.BookCheckIcon;
 1660:
            return golfie;
 1662:
            if(michal) { _fun00006_ip = 1866; continue _fun00005 }
 1668:
            michal = report.isNSFW;
            michal = michal.bind(report)();
            if(!michal) { _fun00006_ip = 1725; continue _fun00005 }
 1681:
            if(!(oscard != tangon)) { _fun00006_ip = 1694; continue _fun00005 }
 1685:
            michal = tangon.ignoreTraits;
            if(michal) { _fun00006_ip = 1725; continue _fun00005 }
 1694:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 39;
            michal = option[michal];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.TextWarningIcon;
            _fun00006_ip = 1864; continue _fun00005;
 1725:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 24;
            golfie = verify[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(report);
            if(!golfie) { _fun00006_ip = 1794; continue _fun00005 }
 1753:
            if(!(oscard != tangon)) { _fun00006_ip = 1766; continue _fun00005 }
 1757:
            tangon = tangon.ignoreTraits;
            if(tangon) { _fun00006_ip = 1794; continue _fun00005 }
 1766:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 40;
            tangon = option[tangon];
            tangon = golfie.bind(zuuluu)(tangon);
            tangon = tangon.TextLockIcon;
            _fun00006_ip = 1861; continue _fun00005;
 1794:
            report = report.linkedLobby;
            if(!(oscard == report)) { _fun00006_ip = 1832; continue _fun00005 }
 1804:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 42;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            report = report.TextIcon;
            _fun00006_ip = 1858; continue _fun00005;
 1832:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 41;
            oscard = option[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            report = oscard.TextControllerIcon;
 1858:
            tangon = report;
 1861:
            michal = tangon;
 1864:
            _fun00006_ip = 1892; continue _fun00005;
 1866:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 38;
            tangon = oscard[tangon];
            tangon = report.bind(zuuluu)(tangon);
            michal = tangon.BookCheckIcon;
 1892:
            return michal;
 1894:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 37;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.FolderIcon;
            return michal;
 1922:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 36;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ThreadIcon;
            return michal;
 1950:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 35;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ThreadLockIcon;
            return michal;
 1978:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 34;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.ChatIcon;
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ChannelTypes;
    var _closure1_slot7 = golfie;
    golfie = 61;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/native/ChannelUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['getThreadChannelIcon'] = oscard;
    oscard = function(argFoo) { // Original name: getSimpleChannelIcon
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot8;
            entity = michal.type;
            tangon = undefined;
            entity = report.bind(tangon)(entity);
            report = null;
            if(!(report == entity)) { _fun00008_ip = 439; continue _fun00007 }
 31:
            golfie = michal.type;
            oscard = _closure1_slot7;
            oscard = oscard.PRIVATE_THREAD;
            if(!(oscard !== golfie)) { _fun00008_ip = 423; continue _fun00007 }
 53:
            oscard = _closure1_slot7;
            oscard = oscard.ANNOUNCEMENT_THREAD;
            if(!(oscard !== golfie)) { _fun00008_ip = 423; continue _fun00007 }
 70:
            oscard = _closure1_slot7;
            oscard = oscard.PUBLIC_THREAD;
            if(!(oscard !== golfie)) { _fun00008_ip = 423; continue _fun00007 }
 87:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_CATEGORY;
            if(!(oscard !== golfie)) { _fun00008_ip = 401; continue _fun00007 }
 104:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_TEXT;
            if(!(oscard !== golfie)) { _fun00008_ip = 379; continue _fun00007 }
 121:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_FORUM;
            if(!(oscard !== golfie)) { _fun00008_ip = 379; continue _fun00007 }
 138:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_MEDIA;
            if(!(oscard !== golfie)) { _fun00008_ip = 379; continue _fun00007 }
 155:
            oscard = _closure1_slot7;
            oscard = oscard.GROUP_DM;
            if(!(oscard !== golfie)) { _fun00008_ip = 357; continue _fun00007 }
 172:
            oscard = _closure1_slot7;
            oscard = oscard.DM;
            if(!(oscard !== golfie)) { _fun00008_ip = 335; continue _fun00007 }
 189:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_ANNOUNCEMENT;
            if(!(oscard !== golfie)) { _fun00008_ip = 313; continue _fun00007 }
 203:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_STAGE_VOICE;
            if(!(oscard !== golfie)) { _fun00008_ip = 291; continue _fun00007 }
 217:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_VOICE;
            if(!(oscard !== golfie)) { _fun00008_ip = 269; continue _fun00007 }
 231:
            oscard = _closure1_slot7;
            oscard = oscard.GUILD_DIRECTORY;
            if(!(oscard !== golfie)) { _fun00008_ip = 247; continue _fun00007 }
 245:
            return report;
 247:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 14;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 269:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 13;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 291:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 12;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 313:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 11;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 335:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 10;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 357:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 9;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 379:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 8;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 401:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 7;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 423:
            zuuluu = _closure1_slot8;
            michal = michal.type;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 439:
            return entity;
        }
    };
    zuuluu['getSimpleChannelIcon'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: getChannelIconWithGuild
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            zuuluu = _closure1_slot9;
            michal = {};
            entity = null;
            golfie = entity == report;
            entity = undefined;
            oscard = undefined;
            if(golfie) { _fun00010_ip = 34; continue _fun00009 }
 28:
            oscard = report.rulesChannelId;
 34:
            report = tangon.id;
            report = oscard === report;
            michal['isRulesChannel'] = report;
            entity = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    zuuluu['getChannelIconWithGuild'] = oscard;
    oscard = function(argFoo) { // Original name: getChannelMentionIcon
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            entity = 'voice';
            if(!(entity !== michal)) { _fun00012_ip = 362; continue _fun00011 }
 14:
            entity = 'voice-locked';
            if(!(entity !== michal)) { _fun00012_ip = 335; continue _fun00011 }
 27:
            entity = 'stage';
            if(!(entity !== michal)) { _fun00012_ip = 308; continue _fun00011 }
 38:
            entity = 'stage-locked';
            if(!(entity !== michal)) { _fun00012_ip = 281; continue _fun00011 }
 51:
            entity = 'text';
            if(!(entity !== michal)) { _fun00012_ip = 254; continue _fun00011 }
 62:
            entity = 'thread';
            if(!(entity !== michal)) { _fun00012_ip = 227; continue _fun00011 }
 73:
            entity = 'post';
            if(!(entity !== michal)) { _fun00012_ip = 200; continue _fun00011 }
 81:
            entity = 'message';
            if(!(entity !== michal)) { _fun00012_ip = 200; continue _fun00011 }
 89:
            entity = 'forum';
            if(!(entity !== michal)) { _fun00012_ip = 173; continue _fun00011 }
 99:
            entity = 'media';
            if(!(entity !== michal)) { _fun00012_ip = 146; continue _fun00011 }
 107:
            entity = 'locked';
            if(!(entity !== michal)) { _fun00012_ip = 119; continue _fun00011 }
 115:
            entity = null;
            return entity;
 119:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 20;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 146:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 19;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 173:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 200:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 227:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 254:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 281:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 308:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 335:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 362:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['getChannelMentionIcon'] = oscard;
    zuuluu['getChannelIcon'] = report;
    report = function(argFoo, argBar) { // Original name: getChannelIconComponentWithGuild
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            zuuluu = _closure1_slot10;
            michal = {};
            entity = null;
            golfie = entity == report;
            entity = undefined;
            oscard = undefined;
            if(golfie) { _fun00014_ip = 34; continue _fun00013 }
 28:
            oscard = report.rulesChannelId;
 34:
            report = tangon.id;
            report = oscard === report;
            michal['isRulesChannel'] = report;
            entity = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    zuuluu['getChannelIconComponentWithGuild'] = report;
    zuuluu['getChannelIconComponent'] = tangon;
    michal = function(argFoo) { // Original name: getSimpleChannelIconComponent
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.type;
            entity = _closure1_slot7;
            entity = entity.PRIVATE_THREAD;
            if(!(entity !== tangon)) { _fun00016_ip = 527; continue _fun00015 }
 28:
            entity = _closure1_slot7;
            entity = entity.ANNOUNCEMENT_THREAD;
            if(!(entity !== tangon)) { _fun00016_ip = 527; continue _fun00015 }
 45:
            entity = _closure1_slot7;
            entity = entity.PUBLIC_THREAD;
            if(!(entity !== tangon)) { _fun00016_ip = 527; continue _fun00015 }
 62:
            entity = _closure1_slot7;
            entity = entity.GUILD_CATEGORY;
            if(!(entity !== tangon)) { _fun00016_ip = 497; continue _fun00015 }
 79:
            entity = _closure1_slot7;
            entity = entity.GUILD_TEXT;
            if(!(entity !== tangon)) { _fun00016_ip = 467; continue _fun00015 }
 96:
            entity = _closure1_slot7;
            entity = entity.GUILD_FORUM;
            if(!(entity !== tangon)) { _fun00016_ip = 437; continue _fun00015 }
 113:
            entity = _closure1_slot7;
            entity = entity.GUILD_MEDIA;
            if(!(entity !== tangon)) { _fun00016_ip = 407; continue _fun00015 }
 130:
            entity = _closure1_slot7;
            entity = entity.GROUP_DM;
            if(!(entity !== tangon)) { _fun00016_ip = 377; continue _fun00015 }
 147:
            entity = _closure1_slot7;
            entity = entity.DM;
            if(!(entity !== tangon)) { _fun00016_ip = 347; continue _fun00015 }
 164:
            entity = _closure1_slot7;
            entity = entity.GUILD_ANNOUNCEMENT;
            if(!(entity !== tangon)) { _fun00016_ip = 317; continue _fun00015 }
 181:
            entity = _closure1_slot7;
            entity = entity.GUILD_STAGE_VOICE;
            if(!(entity !== tangon)) { _fun00016_ip = 287; continue _fun00015 }
 195:
            entity = _closure1_slot7;
            entity = entity.GUILD_VOICE;
            if(!(entity !== tangon)) { _fun00016_ip = 257; continue _fun00015 }
 209:
            entity = _closure1_slot7;
            entity = entity.GUILD_DIRECTORY;
            if(!(entity !== tangon)) { _fun00016_ip = 227; continue _fun00015 }
 223:
            entity = null;
            return entity;
 227:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 60;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.HubIcon;
            return entity;
 257:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 59;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.VoiceNormalIcon;
            return entity;
 287:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 56;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.StageIcon;
            return entity;
 317:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 53;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.AnnouncementsIcon;
            return entity;
 347:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 50;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.AtIcon;
            return entity;
 377:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 49;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.GroupIcon;
            return entity;
 407:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 47;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.ImageIcon;
            return entity;
 437:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 48;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.ForumIcon;
            return entity;
 467:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 42;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.TextIcon;
            return entity;
 497:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 37;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.FolderIcon;
            return entity;
 527:
            entity = zuuluu.isForumPost;
            entity = entity.bind(zuuluu)();
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            if(entity) { _fun00016_ip = 570; continue _fun00015 }
 548:
            entity = 36;
            michal = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            entity = entity.ThreadIcon;
            _fun00016_ip = 590; continue _fun00015;
 570:
            michal = 34;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            entity = michal.ChatIcon;
 590:
            return entity;
        }
    };
    zuuluu['getSimpleChannelIconComponent'] = michal;
    return entity;
})();