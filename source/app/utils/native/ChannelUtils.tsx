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
            michal = _closure1_slot6;
            michal = michal.PRIVATE_THREAD;
            if(!(michal !== zuuluu)) { _fun00002_ip = 76; continue _fun00001 }
 20:
            michal = _closure1_slot6;
            michal = michal.ANNOUNCEMENT_THREAD;
            if(!(michal !== zuuluu)) { _fun00002_ip = 52; continue _fun00001 }
 34:
            michal = _closure1_slot6;
            michal = michal.PUBLIC_THREAD;
            if(!(michal !== zuuluu)) { _fun00002_ip = 52; continue _fun00001 }
 48:
            michal = null;
            return michal;
 52:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            return michal;
 76:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    var _closure1_slot7 = oscard;
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
            golfie = entity.isRulesChannel;
            romeon = entity.textFocused;
            offset = entity.locked;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 20;
            michal = zuuluu[michal];
            zuuluu = undefined;
            yankee = report.bind(zuuluu)(michal);
            verify = yankee.shouldShowMembershipVerificationGate;
            report = tangon.guild_id;
            foxtra = _closure1_slot4;
            michal = new Array(3);
            michal[0] = foxtra;
            foxtra = _closure1_slot5;
            michal[1] = foxtra;
            foxtra = _closure1_slot3;
            michal[2] = foxtra;
            verify = verify.bind(yankee)(report, michal);
            michal = tangon.isForumPost;
            michal = michal.bind(tangon)();
            if(michal) { _fun00004_ip = 1694; continue _fun00003 }
 121:
            report = _closure1_slot7;
            michal = tangon.type;
            michal = report.bind(zuuluu)(michal);
            if(!(option == michal)) { _fun00004_ip = 1692; continue _fun00003 }
 142:
            report = tangon.isMediaChannel;
            yankee = report.bind(tangon)();
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            report = 21;
            report = backup[report];
            foxtra = foxtra.bind(zuuluu)(report);
            report = foxtra.isChannelNSFW;
            report = report.bind(foxtra)(tangon);
            backup = tangon.type;
            foxtra = _closure1_slot6;
            foxtra = foxtra.PRIVATE_THREAD;
            if(!(foxtra !== backup)) { _fun00004_ip = 1676; continue _fun00003 }
 205:
            foxtra = _closure1_slot6;
            foxtra = foxtra.ANNOUNCEMENT_THREAD;
            if(!(foxtra !== backup)) { _fun00004_ip = 1676; continue _fun00003 }
 222:
            foxtra = _closure1_slot6;
            foxtra = foxtra.PUBLIC_THREAD;
            if(!(foxtra !== backup)) { _fun00004_ip = 1676; continue _fun00003 }
 239:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_CATEGORY;
            if(!(foxtra !== backup)) { _fun00004_ip = 1654; continue _fun00003 }
 256:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_TEXT;
            if(!(foxtra !== backup)) { _fun00004_ip = 1465; continue _fun00003 }
 273:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_FORUM;
            if(!(foxtra !== backup)) { _fun00004_ip = 1275; continue _fun00003 }
 290:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_MEDIA;
            if(!(foxtra !== backup)) { _fun00004_ip = 1121; continue _fun00003 }
 307:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GROUP_DM;
            if(!(foxtra !== backup)) { _fun00004_ip = 1099; continue _fun00003 }
 324:
            foxtra = _closure1_slot6;
            foxtra = foxtra.DM;
            if(!(foxtra !== backup)) { _fun00004_ip = 1077; continue _fun00003 }
 341:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_ANNOUNCEMENT;
            if(!(foxtra !== backup)) { _fun00004_ip = 923; continue _fun00003 }
 358:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_STAGE_VOICE;
            if(!(foxtra !== backup)) { _fun00004_ip = 711; continue _fun00003 }
 375:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_VOICE;
            if(!(foxtra !== backup)) { _fun00004_ip = 427; continue _fun00003 }
 389:
            foxtra = _closure1_slot6;
            foxtra = foxtra.GUILD_DIRECTORY;
            if(!(foxtra !== backup)) { _fun00004_ip = 405; continue _fun00003 }
 403:
            return option;
 405:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 13;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            return foxtra;
 427:
            if(romeon) { _fun00004_ip = 689; continue _fun00003 }
 433:
            if(!verify) { _fun00004_ip = 516; continue _fun00003 }
 436:
            if(!(option != oscard)) { _fun00004_ip = 449; continue _fun00003 }
 440:
            romeon = oscard.ignoreTraits;
            if(romeon) { _fun00004_ip = 516; continue _fun00003 }
 449:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 24;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.bind(zuuluu)(tangon);
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            if(romeon) { _fun00004_ip = 499; continue _fun00003 }
 485:
            romeon = 14;
            romeon = kiloes[romeon];
            romeon = backup.bind(zuuluu)(romeon);
            _fun00004_ip = 511; continue _fun00003;
 499:
            foxtra = 32;
            foxtra = kiloes[foxtra];
            romeon = backup.bind(zuuluu)(foxtra);
 511:
            _fun00004_ip = 687; continue _fun00003;
 516:
            if(!offset) { _fun00004_ip = 557; continue _fun00003 }
 519:
            if(!(option != oscard)) { _fun00004_ip = 532; continue _fun00003 }
 523:
            foxtra = oscard.ignoreTraits;
            if(foxtra) { _fun00004_ip = 557; continue _fun00003 }
 532:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 32;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            _fun00004_ip = 684; continue _fun00003;
 557:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 24;
            backup = sizing[backup];
            backup = kiloes.bind(zuuluu)(backup);
            backup = backup.bind(zuuluu)(tangon);
            if(!backup) { _fun00004_ip = 620; continue _fun00003 }
 585:
            if(!(option != oscard)) { _fun00004_ip = 598; continue _fun00003 }
 589:
            backup = oscard.ignoreTraits;
            if(backup) { _fun00004_ip = 620; continue _fun00003 }
 598:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 14;
            backup = sizing[backup];
            backup = kiloes.bind(zuuluu)(backup);
            _fun00004_ip = 681; continue _fun00003;
 620:
            if(!report) { _fun00004_ip = 658; continue _fun00003 }
 623:
            if(!(option != oscard)) { _fun00004_ip = 636; continue _fun00003 }
 627:
            kiloes = oscard.ignoreTraits;
            if(kiloes) { _fun00004_ip = 658; continue _fun00003 }
 636:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 33;
            kiloes = output[kiloes];
            kiloes = sizing.bind(zuuluu)(kiloes);
            _fun00004_ip = 678; continue _fun00003;
 658:
            output = _closure1_slot1;
            result = _closure1_slot2;
            sizing = 12;
            sizing = result[sizing];
            kiloes = output.bind(zuuluu)(sizing);
 678:
            backup = kiloes;
 681:
            foxtra = backup;
 684:
            romeon = foxtra;
 687:
            _fun00004_ip = 709; continue _fun00003;
 689:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 16;
            foxtra = kiloes[foxtra];
            romeon = backup.bind(zuuluu)(foxtra);
 709:
            return romeon;
 711:
            if(!verify) { _fun00004_ip = 794; continue _fun00003 }
 714:
            if(!(option != oscard)) { _fun00004_ip = 727; continue _fun00003 }
 718:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 794; continue _fun00003 }
 727:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = 24;
            verify = foxtra[verify];
            verify = romeon.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(tangon);
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            if(verify) { _fun00004_ip = 777; continue _fun00003 }
 763:
            verify = 15;
            verify = backup[verify];
            verify = foxtra.bind(zuuluu)(verify);
            _fun00004_ip = 789; continue _fun00003;
 777:
            romeon = 32;
            romeon = backup[romeon];
            verify = foxtra.bind(zuuluu)(romeon);
 789:
            _fun00004_ip = 921; continue _fun00003;
 794:
            if(!offset) { _fun00004_ip = 832; continue _fun00003 }
 797:
            if(!(option != oscard)) { _fun00004_ip = 810; continue _fun00003 }
 801:
            offset = oscard.ignoreTraits;
            if(offset) { _fun00004_ip = 832; continue _fun00003 }
 810:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 32;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            _fun00004_ip = 918; continue _fun00003;
 832:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 24;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.bind(zuuluu)(tangon);
            if(!romeon) { _fun00004_ip = 895; continue _fun00003 }
 860:
            if(!(option != oscard)) { _fun00004_ip = 873; continue _fun00003 }
 864:
            romeon = oscard.ignoreTraits;
            if(romeon) { _fun00004_ip = 895; continue _fun00003 }
 873:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 15;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            _fun00004_ip = 915; continue _fun00003;
 895:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 11;
            foxtra = kiloes[foxtra];
            romeon = backup.bind(zuuluu)(foxtra);
 915:
            offset = romeon;
 918:
            verify = offset;
 921:
            return verify;
 923:
            if(golfie) { _fun00004_ip = 1055; continue _fun00003 }
 929:
            if(!report) { _fun00004_ip = 967; continue _fun00003 }
 932:
            if(!(option != oscard)) { _fun00004_ip = 945; continue _fun00003 }
 936:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 967; continue _fun00003 }
 945:
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 30;
            verify = romeon[verify];
            verify = offset.bind(zuuluu)(verify);
            _fun00004_ip = 1053; continue _fun00003;
 967:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 24;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(tangon);
            if(!offset) { _fun00004_ip = 1030; continue _fun00003 }
 995:
            if(!(option != oscard)) { _fun00004_ip = 1008; continue _fun00003 }
 999:
            offset = oscard.ignoreTraits;
            if(offset) { _fun00004_ip = 1030; continue _fun00003 }
 1008:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 31;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            _fun00004_ip = 1050; continue _fun00003;
 1030:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 10;
            romeon = backup[romeon];
            offset = foxtra.bind(zuuluu)(romeon);
 1050:
            verify = offset;
 1053:
            _fun00004_ip = 1075; continue _fun00003;
 1055:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 22;
            offset = foxtra[offset];
            verify = romeon.bind(zuuluu)(offset);
 1075:
            return verify;
 1077:
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 9;
            verify = romeon[verify];
            verify = offset.bind(zuuluu)(verify);
            return verify;
 1099:
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 8;
            verify = romeon[verify];
            verify = offset.bind(zuuluu)(verify);
            return verify;
 1121:
            if(golfie) { _fun00004_ip = 1253; continue _fun00003 }
 1127:
            if(!report) { _fun00004_ip = 1165; continue _fun00003 }
 1130:
            if(!(option != oscard)) { _fun00004_ip = 1143; continue _fun00003 }
 1134:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1165; continue _fun00003 }
 1143:
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 26;
            verify = romeon[verify];
            verify = offset.bind(zuuluu)(verify);
            _fun00004_ip = 1251; continue _fun00003;
 1165:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 24;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(tangon);
            if(!offset) { _fun00004_ip = 1228; continue _fun00003 }
 1193:
            if(!(option != oscard)) { _fun00004_ip = 1206; continue _fun00003 }
 1197:
            offset = oscard.ignoreTraits;
            if(offset) { _fun00004_ip = 1228; continue _fun00003 }
 1206:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 28;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            _fun00004_ip = 1248; continue _fun00003;
 1228:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 18;
            romeon = backup[romeon];
            offset = foxtra.bind(zuuluu)(romeon);
 1248:
            verify = offset;
 1251:
            _fun00004_ip = 1273; continue _fun00003;
 1253:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 22;
            offset = foxtra[offset];
            verify = romeon.bind(zuuluu)(offset);
 1273:
            return verify;
 1275:
            if(golfie) { _fun00004_ip = 1443; continue _fun00003 }
 1281:
            if(!report) { _fun00004_ip = 1331; continue _fun00003 }
 1284:
            if(!(option != oscard)) { _fun00004_ip = 1297; continue _fun00003 }
 1288:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1331; continue _fun00003 }
 1297:
            offset = _closure1_slot1;
            foxtra = _closure1_slot2;
            if(yankee) { _fun00004_ip = 1317; continue _fun00003 }
 1308:
            verify = 27;
            verify = foxtra[verify];
            _fun00004_ip = 1324; continue _fun00003;
 1317:
            romeon = 26;
            verify = foxtra[romeon];
 1324:
            verify = offset.bind(zuuluu)(verify);
            _fun00004_ip = 1441; continue _fun00003;
 1331:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 24;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(tangon);
            if(!offset) { _fun00004_ip = 1406; continue _fun00003 }
 1359:
            if(!(option != oscard)) { _fun00004_ip = 1372; continue _fun00003 }
 1363:
            offset = oscard.ignoreTraits;
            if(offset) { _fun00004_ip = 1406; continue _fun00003 }
 1372:
            romeon = _closure1_slot1;
            backup = _closure1_slot2;
            if(yankee) { _fun00004_ip = 1392; continue _fun00003 }
 1383:
            offset = 29;
            offset = backup[offset];
            _fun00004_ip = 1399; continue _fun00003;
 1392:
            foxtra = 28;
            offset = backup[foxtra];
 1399:
            offset = romeon.bind(zuuluu)(offset);
            _fun00004_ip = 1438; continue _fun00003;
 1406:
            romeon = _closure1_slot1;
            backup = _closure1_slot2;
            if(yankee) { _fun00004_ip = 1426; continue _fun00003 }
 1417:
            yankee = 17;
            yankee = backup[yankee];
            _fun00004_ip = 1433; continue _fun00003;
 1426:
            foxtra = 18;
            yankee = backup[foxtra];
 1433:
            offset = romeon.bind(zuuluu)(yankee);
 1438:
            verify = offset;
 1441:
            _fun00004_ip = 1463; continue _fun00003;
 1443:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 22;
            offset = romeon[offset];
            verify = yankee.bind(zuuluu)(offset);
 1463:
            return verify;
 1465:
            if(golfie) { _fun00004_ip = 1632; continue _fun00003 }
 1471:
            if(!report) { _fun00004_ip = 1509; continue _fun00003 }
 1474:
            if(!(option != oscard)) { _fun00004_ip = 1487; continue _fun00003 }
 1478:
            report = oscard.ignoreTraits;
            if(report) { _fun00004_ip = 1509; continue _fun00003 }
 1487:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            report = 23;
            report = verify[report];
            report = golfie.bind(zuuluu)(report);
            _fun00004_ip = 1630; continue _fun00003;
 1509:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golfie = 24;
            golfie = offset[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(tangon);
            if(!golfie) { _fun00004_ip = 1572; continue _fun00003 }
 1537:
            if(!(option != oscard)) { _fun00004_ip = 1550; continue _fun00003 }
 1541:
            oscard = oscard.ignoreTraits;
            if(oscard) { _fun00004_ip = 1572; continue _fun00003 }
 1550:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 19;
            oscard = verify[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            _fun00004_ip = 1627; continue _fun00003;
 1572:
            golfie = tangon.linkedLobby;
            if(!(option == golfie)) { _fun00004_ip = 1604; continue _fun00003 }
 1582:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 7;
            golfie = verify[golfie];
            golfie = option.bind(zuuluu)(golfie);
            _fun00004_ip = 1624; continue _fun00003;
 1604:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 25;
            option = offset[option];
            golfie = verify.bind(zuuluu)(option);
 1624:
            oscard = golfie;
 1627:
            report = oscard;
 1630:
            _fun00004_ip = 1652; continue _fun00003;
 1632:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 22;
            oscard = option[oscard];
            report = golfie.bind(zuuluu)(oscard);
 1652:
            return report;
 1654:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 6;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            return report;
 1676:
            report = _closure1_slot7;
            tangon = tangon.type;
            tangon = report.bind(zuuluu)(tangon);
            return tangon;
 1692:
            return michal;
 1694:
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 16;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot8 = report;
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
            golfie = entity.isRulesChannel;
            yankee = entity.textFocused;
            verify = entity.locked;
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 20;
            michal = zuuluu[michal];
            zuuluu = undefined;
            romeon = option.bind(zuuluu)(michal);
            offset = romeon.shouldShowMembershipVerificationGate;
            option = report.guild_id;
            foxtra = _closure1_slot4;
            michal = new Array(3);
            michal[0] = foxtra;
            foxtra = _closure1_slot5;
            michal[1] = foxtra;
            foxtra = _closure1_slot3;
            michal[2] = foxtra;
            option = offset.bind(romeon)(option, michal);
            michal = report.isForumPost;
            michal = michal.bind(report)();
            if(michal) { _fun00006_ip = 1951; continue _fun00005 }
 121:
            michal = report.isMediaChannel;
            offset = michal.bind(report)();
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 21;
            michal = foxtra[michal];
            romeon = romeon.bind(zuuluu)(michal);
            michal = romeon.isChannelNSFW;
            michal = michal.bind(romeon)(report);
            foxtra = report.type;
            romeon = _closure1_slot6;
            romeon = romeon.PRIVATE_THREAD;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1923; continue _fun00005 }
 184:
            romeon = _closure1_slot6;
            romeon = romeon.ANNOUNCEMENT_THREAD;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1895; continue _fun00005 }
 201:
            romeon = _closure1_slot6;
            romeon = romeon.PUBLIC_THREAD;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1895; continue _fun00005 }
 218:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_CATEGORY;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1867; continue _fun00005 }
 235:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_TEXT;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1645; continue _fun00005 }
 252:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_FORUM;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1392; continue _fun00005 }
 269:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_MEDIA;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1214; continue _fun00005 }
 286:
            romeon = _closure1_slot6;
            romeon = romeon.GROUP_DM;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1186; continue _fun00005 }
 303:
            romeon = _closure1_slot6;
            romeon = romeon.DM;
            if(!(romeon !== foxtra)) { _fun00006_ip = 1158; continue _fun00005 }
 320:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_ANNOUNCEMENT;
            if(!(romeon !== foxtra)) { _fun00006_ip = 980; continue _fun00005 }
 337:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_STAGE_VOICE;
            if(!(romeon !== foxtra)) { _fun00006_ip = 738; continue _fun00005 }
 354:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_VOICE;
            if(!(romeon !== foxtra)) { _fun00006_ip = 412; continue _fun00005 }
 368:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_DIRECTORY;
            if(!(romeon !== foxtra)) { _fun00006_ip = 384; continue _fun00005 }
 382:
            return zuuluu;
 384:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 60;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.HubIcon;
            return romeon;
 412:
            if(yankee) { _fun00006_ip = 710; continue _fun00005 }
 418:
            if(!option) { _fun00006_ip = 513; continue _fun00005 }
 421:
            if(!(oscard != tangon)) { _fun00006_ip = 434; continue _fun00005 }
 425:
            yankee = tangon.ignoreTraits;
            if(yankee) { _fun00006_ip = 513; continue _fun00005 }
 434:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 24;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.bind(zuuluu)(report);
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            if(yankee) { _fun00006_ip = 490; continue _fun00005 }
 470:
            yankee = 57;
            yankee = backup[yankee];
            yankee = foxtra.bind(zuuluu)(yankee);
            yankee = yankee.VoiceLockIcon;
            _fun00006_ip = 508; continue _fun00005;
 490:
            romeon = 54;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            yankee = romeon.LockIcon;
 508:
            _fun00006_ip = 708; continue _fun00005;
 513:
            if(!verify) { _fun00006_ip = 560; continue _fun00005 }
 516:
            if(!(oscard != tangon)) { _fun00006_ip = 529; continue _fun00005 }
 520:
            romeon = tangon.ignoreTraits;
            if(romeon) { _fun00006_ip = 560; continue _fun00005 }
 529:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 54;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.LockIcon;
            _fun00006_ip = 705; continue _fun00005;
 560:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 24;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            foxtra = foxtra.bind(zuuluu)(report);
            if(!foxtra) { _fun00006_ip = 629; continue _fun00005 }
 588:
            if(!(oscard != tangon)) { _fun00006_ip = 601; continue _fun00005 }
 592:
            foxtra = tangon.ignoreTraits;
            if(foxtra) { _fun00006_ip = 629; continue _fun00005 }
 601:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 57;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            foxtra = foxtra.VoiceLockIcon;
            _fun00006_ip = 702; continue _fun00005;
 629:
            if(!michal) { _fun00006_ip = 673; continue _fun00005 }
 632:
            if(!(oscard != tangon)) { _fun00006_ip = 645; continue _fun00005 }
 636:
            backup = tangon.ignoreTraits;
            if(backup) { _fun00006_ip = 673; continue _fun00005 }
 645:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            backup = 58;
            backup = sizing[backup];
            backup = kiloes.bind(zuuluu)(backup);
            backup = backup.VoiceWarningIcon;
            _fun00006_ip = 699; continue _fun00005;
 673:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            kiloes = 59;
            kiloes = output[kiloes];
            kiloes = sizing.bind(zuuluu)(kiloes);
            backup = kiloes.VoiceNormalIcon;
 699:
            foxtra = backup;
 702:
            romeon = foxtra;
 705:
            yankee = romeon;
 708:
            _fun00006_ip = 736; continue _fun00005;
 710:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 34;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            yankee = romeon.ChatIcon;
 736:
            return yankee;
 738:
            if(!option) { _fun00006_ip = 833; continue _fun00005 }
 741:
            if(!(oscard != tangon)) { _fun00006_ip = 754; continue _fun00005 }
 745:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 833; continue _fun00005 }
 754:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            option = 24;
            option = romeon[option];
            option = yankee.bind(zuuluu)(option);
            option = option.bind(zuuluu)(report);
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            if(option) { _fun00006_ip = 810; continue _fun00005 }
 790:
            option = 55;
            option = foxtra[option];
            option = romeon.bind(zuuluu)(option);
            option = option.StageLockIcon;
            _fun00006_ip = 828; continue _fun00005;
 810:
            yankee = 54;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            option = yankee.LockIcon;
 828:
            _fun00006_ip = 978; continue _fun00005;
 833:
            if(!verify) { _fun00006_ip = 877; continue _fun00005 }
 836:
            if(!(oscard != tangon)) { _fun00006_ip = 849; continue _fun00005 }
 840:
            verify = tangon.ignoreTraits;
            if(verify) { _fun00006_ip = 877; continue _fun00005 }
 849:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 54;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.LockIcon;
            _fun00006_ip = 975; continue _fun00005;
 877:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 24;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.bind(zuuluu)(report);
            if(!yankee) { _fun00006_ip = 946; continue _fun00005 }
 905:
            if(!(oscard != tangon)) { _fun00006_ip = 918; continue _fun00005 }
 909:
            yankee = tangon.ignoreTraits;
            if(yankee) { _fun00006_ip = 946; continue _fun00005 }
 918:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 55;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.StageLockIcon;
            _fun00006_ip = 972; continue _fun00005;
 946:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 56;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            yankee = romeon.StageIcon;
 972:
            verify = yankee;
 975:
            option = verify;
 978:
            return option;
 980:
            if(golfie) { _fun00006_ip = 1130; continue _fun00005 }
 986:
            if(!michal) { _fun00006_ip = 1030; continue _fun00005 }
 989:
            if(!(oscard != tangon)) { _fun00006_ip = 1002; continue _fun00005 }
 993:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1030; continue _fun00005 }
 1002:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 51;
            option = yankee[option];
            option = verify.bind(zuuluu)(option);
            option = option.AnnouncementsWarningIcon;
            _fun00006_ip = 1128; continue _fun00005;
 1030:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 24;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(report);
            if(!verify) { _fun00006_ip = 1099; continue _fun00005 }
 1058:
            if(!(oscard != tangon)) { _fun00006_ip = 1071; continue _fun00005 }
 1062:
            verify = tangon.ignoreTraits;
            if(verify) { _fun00006_ip = 1099; continue _fun00005 }
 1071:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 52;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.AnnouncementsLockIcon;
            _fun00006_ip = 1125; continue _fun00005;
 1099:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 53;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            verify = yankee.AnnouncementsIcon;
 1125:
            option = verify;
 1128:
            _fun00006_ip = 1156; continue _fun00005;
 1130:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 38;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            option = verify.BookCheckIcon;
 1156:
            return option;
 1158:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 50;
            option = yankee[option];
            option = verify.bind(zuuluu)(option);
            option = option.AtIcon;
            return option;
 1186:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 49;
            option = yankee[option];
            option = verify.bind(zuuluu)(option);
            option = option.GroupIcon;
            return option;
 1214:
            if(golfie) { _fun00006_ip = 1364; continue _fun00005 }
 1220:
            if(!michal) { _fun00006_ip = 1264; continue _fun00005 }
 1223:
            if(!(oscard != tangon)) { _fun00006_ip = 1236; continue _fun00005 }
 1227:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1264; continue _fun00005 }
 1236:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 43;
            option = yankee[option];
            option = verify.bind(zuuluu)(option);
            option = option.ImageWarningIcon;
            _fun00006_ip = 1362; continue _fun00005;
 1264:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 24;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(report);
            if(!verify) { _fun00006_ip = 1333; continue _fun00005 }
 1292:
            if(!(oscard != tangon)) { _fun00006_ip = 1305; continue _fun00005 }
 1296:
            verify = tangon.ignoreTraits;
            if(verify) { _fun00006_ip = 1333; continue _fun00005 }
 1305:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 45;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.ImageLockIcon;
            _fun00006_ip = 1359; continue _fun00005;
 1333:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 47;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            verify = yankee.ImageIcon;
 1359:
            option = verify;
 1362:
            _fun00006_ip = 1390; continue _fun00005;
 1364:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 38;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            option = verify.BookCheckIcon;
 1390:
            return option;
 1392:
            if(golfie) { _fun00006_ip = 1617; continue _fun00005 }
 1398:
            if(!michal) { _fun00006_ip = 1468; continue _fun00005 }
 1401:
            if(!(oscard != tangon)) { _fun00006_ip = 1414; continue _fun00005 }
 1405:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1468; continue _fun00005 }
 1414:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            if(offset) { _fun00006_ip = 1445; continue _fun00005 }
 1425:
            option = 44;
            option = romeon[option];
            option = yankee.bind(zuuluu)(option);
            option = option.ForumWarningIcon;
            _fun00006_ip = 1463; continue _fun00005;
 1445:
            verify = 43;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            option = verify.ImageWarningIcon;
 1463:
            _fun00006_ip = 1615; continue _fun00005;
 1468:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 24;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(report);
            if(!verify) { _fun00006_ip = 1560; continue _fun00005 }
 1496:
            if(!(oscard != tangon)) { _fun00006_ip = 1509; continue _fun00005 }
 1500:
            verify = tangon.ignoreTraits;
            if(verify) { _fun00006_ip = 1560; continue _fun00005 }
 1509:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            if(offset) { _fun00006_ip = 1540; continue _fun00005 }
 1520:
            verify = 46;
            verify = foxtra[verify];
            verify = romeon.bind(zuuluu)(verify);
            verify = verify.ForumLockIcon;
            _fun00006_ip = 1558; continue _fun00005;
 1540:
            yankee = 45;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            verify = yankee.ImageLockIcon;
 1558:
            _fun00006_ip = 1612; continue _fun00005;
 1560:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            if(offset) { _fun00006_ip = 1591; continue _fun00005 }
 1571:
            offset = 48;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            offset = offset.ForumIcon;
            _fun00006_ip = 1609; continue _fun00005;
 1591:
            yankee = 47;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            offset = yankee.ImageIcon;
 1609:
            verify = offset;
 1612:
            option = verify;
 1615:
            _fun00006_ip = 1643; continue _fun00005;
 1617:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 38;
            verify = yankee[verify];
            verify = offset.bind(zuuluu)(verify);
            option = verify.BookCheckIcon;
 1643:
            return option;
 1645:
            if(golfie) { _fun00006_ip = 1839; continue _fun00005 }
 1651:
            if(!michal) { _fun00006_ip = 1698; continue _fun00005 }
 1654:
            if(!(oscard != tangon)) { _fun00006_ip = 1667; continue _fun00005 }
 1658:
            michal = tangon.ignoreTraits;
            if(michal) { _fun00006_ip = 1698; continue _fun00005 }
 1667:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 39;
            michal = option[michal];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.TextWarningIcon;
            _fun00006_ip = 1837; continue _fun00005;
 1698:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 24;
            golfie = verify[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(report);
            if(!golfie) { _fun00006_ip = 1767; continue _fun00005 }
 1726:
            if(!(oscard != tangon)) { _fun00006_ip = 1739; continue _fun00005 }
 1730:
            tangon = tangon.ignoreTraits;
            if(tangon) { _fun00006_ip = 1767; continue _fun00005 }
 1739:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 40;
            tangon = option[tangon];
            tangon = golfie.bind(zuuluu)(tangon);
            tangon = tangon.TextLockIcon;
            _fun00006_ip = 1834; continue _fun00005;
 1767:
            report = report.linkedLobby;
            if(!(oscard == report)) { _fun00006_ip = 1805; continue _fun00005 }
 1777:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 42;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            report = report.TextIcon;
            _fun00006_ip = 1831; continue _fun00005;
 1805:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 41;
            oscard = option[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            report = oscard.TextControllerIcon;
 1831:
            tangon = report;
 1834:
            michal = tangon;
 1837:
            _fun00006_ip = 1865; continue _fun00005;
 1839:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 38;
            tangon = oscard[tangon];
            tangon = report.bind(zuuluu)(tangon);
            michal = tangon.BookCheckIcon;
 1865:
            return michal;
 1867:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 37;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.FolderIcon;
            return michal;
 1895:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 36;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ThreadIcon;
            return michal;
 1923:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 35;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ThreadLockIcon;
            return michal;
 1951:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 34;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.ChatIcon;
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
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
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ChannelTypes;
    var _closure1_slot6 = golfie;
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
            report = _closure1_slot7;
            entity = michal.type;
            tangon = undefined;
            entity = report.bind(tangon)(entity);
            report = null;
            if(!(report == entity)) { _fun00008_ip = 439; continue _fun00007 }
 31:
            golfie = michal.type;
            oscard = _closure1_slot6;
            oscard = oscard.PRIVATE_THREAD;
            if(!(oscard !== golfie)) { _fun00008_ip = 423; continue _fun00007 }
 53:
            oscard = _closure1_slot6;
            oscard = oscard.ANNOUNCEMENT_THREAD;
            if(!(oscard !== golfie)) { _fun00008_ip = 423; continue _fun00007 }
 70:
            oscard = _closure1_slot6;
            oscard = oscard.PUBLIC_THREAD;
            if(!(oscard !== golfie)) { _fun00008_ip = 423; continue _fun00007 }
 87:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_CATEGORY;
            if(!(oscard !== golfie)) { _fun00008_ip = 401; continue _fun00007 }
 104:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_TEXT;
            if(!(oscard !== golfie)) { _fun00008_ip = 379; continue _fun00007 }
 121:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_FORUM;
            if(!(oscard !== golfie)) { _fun00008_ip = 379; continue _fun00007 }
 138:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_MEDIA;
            if(!(oscard !== golfie)) { _fun00008_ip = 379; continue _fun00007 }
 155:
            oscard = _closure1_slot6;
            oscard = oscard.GROUP_DM;
            if(!(oscard !== golfie)) { _fun00008_ip = 357; continue _fun00007 }
 172:
            oscard = _closure1_slot6;
            oscard = oscard.DM;
            if(!(oscard !== golfie)) { _fun00008_ip = 335; continue _fun00007 }
 189:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_ANNOUNCEMENT;
            if(!(oscard !== golfie)) { _fun00008_ip = 313; continue _fun00007 }
 203:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_STAGE_VOICE;
            if(!(oscard !== golfie)) { _fun00008_ip = 291; continue _fun00007 }
 217:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_VOICE;
            if(!(oscard !== golfie)) { _fun00008_ip = 269; continue _fun00007 }
 231:
            oscard = _closure1_slot6;
            oscard = oscard.GUILD_DIRECTORY;
            if(!(oscard !== golfie)) { _fun00008_ip = 247; continue _fun00007 }
 245:
            return report;
 247:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 13;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 269:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 12;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 291:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 11;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 313:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 10;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 335:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 9;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 357:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 8;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 379:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 7;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 401:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 6;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            return report;
 423:
            zuuluu = _closure1_slot7;
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
            zuuluu = _closure1_slot8;
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
            entity = 19;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 146:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 173:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 200:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 227:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 254:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 281:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 308:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 335:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 14;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 362:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 12;
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
            zuuluu = _closure1_slot9;
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
            entity = _closure1_slot6;
            entity = entity.PRIVATE_THREAD;
            if(!(entity !== tangon)) { _fun00016_ip = 527; continue _fun00015 }
 28:
            entity = _closure1_slot6;
            entity = entity.ANNOUNCEMENT_THREAD;
            if(!(entity !== tangon)) { _fun00016_ip = 527; continue _fun00015 }
 45:
            entity = _closure1_slot6;
            entity = entity.PUBLIC_THREAD;
            if(!(entity !== tangon)) { _fun00016_ip = 527; continue _fun00015 }
 62:
            entity = _closure1_slot6;
            entity = entity.GUILD_CATEGORY;
            if(!(entity !== tangon)) { _fun00016_ip = 497; continue _fun00015 }
 79:
            entity = _closure1_slot6;
            entity = entity.GUILD_TEXT;
            if(!(entity !== tangon)) { _fun00016_ip = 467; continue _fun00015 }
 96:
            entity = _closure1_slot6;
            entity = entity.GUILD_FORUM;
            if(!(entity !== tangon)) { _fun00016_ip = 437; continue _fun00015 }
 113:
            entity = _closure1_slot6;
            entity = entity.GUILD_MEDIA;
            if(!(entity !== tangon)) { _fun00016_ip = 407; continue _fun00015 }
 130:
            entity = _closure1_slot6;
            entity = entity.GROUP_DM;
            if(!(entity !== tangon)) { _fun00016_ip = 377; continue _fun00015 }
 147:
            entity = _closure1_slot6;
            entity = entity.DM;
            if(!(entity !== tangon)) { _fun00016_ip = 347; continue _fun00015 }
 164:
            entity = _closure1_slot6;
            entity = entity.GUILD_ANNOUNCEMENT;
            if(!(entity !== tangon)) { _fun00016_ip = 317; continue _fun00015 }
 181:
            entity = _closure1_slot6;
            entity = entity.GUILD_STAGE_VOICE;
            if(!(entity !== tangon)) { _fun00016_ip = 287; continue _fun00015 }
 195:
            entity = _closure1_slot6;
            entity = entity.GUILD_VOICE;
            if(!(entity !== tangon)) { _fun00016_ip = 257; continue _fun00015 }
 209:
            entity = _closure1_slot6;
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