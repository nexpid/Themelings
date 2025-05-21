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
            report = entity.isRulesChannel;
            yankee = entity.textFocused;
            verify = entity.locked;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 20;
            michal = zuuluu[michal];
            zuuluu = undefined;
            romeon = golfie.bind(zuuluu)(michal);
            offset = romeon.shouldShowMembershipVerificationGate;
            golfie = tangon.guild_id;
            foxtra = _closure1_slot4;
            michal = new Array(3);
            michal[0] = foxtra;
            foxtra = _closure1_slot5;
            michal[1] = foxtra;
            foxtra = _closure1_slot3;
            michal[2] = foxtra;
            golfie = offset.bind(romeon)(golfie, michal);
            michal = tangon.isForumPost;
            michal = michal.bind(tangon)();
            if(michal) { _fun00004_ip = 1713; continue _fun00003 }
 121:
            offset = _closure1_slot7;
            michal = tangon.type;
            michal = offset.bind(zuuluu)(michal);
            if(!(option == michal)) { _fun00004_ip = 1711; continue _fun00003 }
 142:
            offset = tangon.isMediaChannel;
            offset = offset.bind(tangon)();
            foxtra = tangon.type;
            romeon = _closure1_slot6;
            romeon = romeon.PRIVATE_THREAD;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1695; continue _fun00003 }
 174:
            romeon = _closure1_slot6;
            romeon = romeon.ANNOUNCEMENT_THREAD;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1695; continue _fun00003 }
 191:
            romeon = _closure1_slot6;
            romeon = romeon.PUBLIC_THREAD;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1695; continue _fun00003 }
 208:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_CATEGORY;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1673; continue _fun00003 }
 225:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_TEXT;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1474; continue _fun00003 }
 242:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_FORUM;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1274; continue _fun00003 }
 259:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_MEDIA;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1110; continue _fun00003 }
 276:
            romeon = _closure1_slot6;
            romeon = romeon.GROUP_DM;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1088; continue _fun00003 }
 293:
            romeon = _closure1_slot6;
            romeon = romeon.DM;
            if(!(romeon !== foxtra)) { _fun00004_ip = 1066; continue _fun00003 }
 310:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_ANNOUNCEMENT;
            if(!(romeon !== foxtra)) { _fun00004_ip = 902; continue _fun00003 }
 327:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_STAGE_VOICE;
            if(!(romeon !== foxtra)) { _fun00004_ip = 690; continue _fun00003 }
 344:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_VOICE;
            if(!(romeon !== foxtra)) { _fun00004_ip = 396; continue _fun00003 }
 358:
            romeon = _closure1_slot6;
            romeon = romeon.GUILD_DIRECTORY;
            if(!(romeon !== foxtra)) { _fun00004_ip = 374; continue _fun00003 }
 372:
            return option;
 374:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 13;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            return romeon;
 396:
            if(yankee) { _fun00004_ip = 668; continue _fun00003 }
 402:
            if(!golfie) { _fun00004_ip = 485; continue _fun00003 }
 405:
            if(!(option != oscard)) { _fun00004_ip = 418; continue _fun00003 }
 409:
            yankee = oscard.ignoreTraits;
            if(yankee) { _fun00004_ip = 485; continue _fun00003 }
 418:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 23;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.bind(zuuluu)(tangon);
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            if(yankee) { _fun00004_ip = 468; continue _fun00003 }
 454:
            yankee = 14;
            yankee = backup[yankee];
            yankee = foxtra.bind(zuuluu)(yankee);
            _fun00004_ip = 480; continue _fun00003;
 468:
            romeon = 31;
            romeon = backup[romeon];
            yankee = foxtra.bind(zuuluu)(romeon);
 480:
            _fun00004_ip = 666; continue _fun00003;
 485:
            if(!verify) { _fun00004_ip = 526; continue _fun00003 }
 488:
            if(!(option != oscard)) { _fun00004_ip = 501; continue _fun00003 }
 492:
            romeon = oscard.ignoreTraits;
            if(romeon) { _fun00004_ip = 526; continue _fun00003 }
 501:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 31;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            _fun00004_ip = 663; continue _fun00003;
 526:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 23;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            foxtra = foxtra.bind(zuuluu)(tangon);
            if(!foxtra) { _fun00004_ip = 589; continue _fun00003 }
 554:
            if(!(option != oscard)) { _fun00004_ip = 567; continue _fun00003 }
 558:
            foxtra = oscard.ignoreTraits;
            if(foxtra) { _fun00004_ip = 589; continue _fun00003 }
 567:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 14;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            _fun00004_ip = 660; continue _fun00003;
 589:
            backup = tangon.isNSFW;
            backup = backup.bind(tangon)();
            if(!backup) { _fun00004_ip = 637; continue _fun00003 }
 602:
            if(!(option != oscard)) { _fun00004_ip = 615; continue _fun00003 }
 606:
            backup = oscard.ignoreTraits;
            if(backup) { _fun00004_ip = 637; continue _fun00003 }
 615:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 32;
            backup = sizing[backup];
            backup = kiloes.bind(zuuluu)(backup);
            _fun00004_ip = 657; continue _fun00003;
 637:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 12;
            kiloes = output[kiloes];
            backup = sizing.bind(zuuluu)(kiloes);
 657:
            foxtra = backup;
 660:
            romeon = foxtra;
 663:
            yankee = romeon;
 666:
            _fun00004_ip = 688; continue _fun00003;
 668:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 16;
            romeon = backup[romeon];
            yankee = foxtra.bind(zuuluu)(romeon);
 688:
            return yankee;
 690:
            if(!golfie) { _fun00004_ip = 773; continue _fun00003 }
 693:
            if(!(option != oscard)) { _fun00004_ip = 706; continue _fun00003 }
 697:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 773; continue _fun00003 }
 706:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 23;
            golfie = romeon[golfie];
            golfie = yankee.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(tangon);
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            if(golfie) { _fun00004_ip = 756; continue _fun00003 }
 742:
            golfie = 15;
            golfie = foxtra[golfie];
            golfie = romeon.bind(zuuluu)(golfie);
            _fun00004_ip = 768; continue _fun00003;
 756:
            yankee = 31;
            yankee = foxtra[yankee];
            golfie = romeon.bind(zuuluu)(yankee);
 768:
            _fun00004_ip = 900; continue _fun00003;
 773:
            if(!verify) { _fun00004_ip = 811; continue _fun00003 }
 776:
            if(!(option != oscard)) { _fun00004_ip = 789; continue _fun00003 }
 780:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 811; continue _fun00003 }
 789:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 31;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 897; continue _fun00003;
 811:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 23;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.bind(zuuluu)(tangon);
            if(!yankee) { _fun00004_ip = 874; continue _fun00003 }
 839:
            if(!(option != oscard)) { _fun00004_ip = 852; continue _fun00003 }
 843:
            yankee = oscard.ignoreTraits;
            if(yankee) { _fun00004_ip = 874; continue _fun00003 }
 852:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 15;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            _fun00004_ip = 894; continue _fun00003;
 874:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 11;
            romeon = backup[romeon];
            yankee = foxtra.bind(zuuluu)(romeon);
 894:
            verify = yankee;
 897:
            golfie = verify;
 900:
            return golfie;
 902:
            if(report) { _fun00004_ip = 1044; continue _fun00003 }
 908:
            golfie = tangon.isNSFW;
            golfie = golfie.bind(tangon)();
            if(!golfie) { _fun00004_ip = 956; continue _fun00003 }
 921:
            if(!(option != oscard)) { _fun00004_ip = 934; continue _fun00003 }
 925:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 956; continue _fun00003 }
 934:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 29;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            _fun00004_ip = 1042; continue _fun00003;
 956:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 23;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(tangon);
            if(!verify) { _fun00004_ip = 1019; continue _fun00003 }
 984:
            if(!(option != oscard)) { _fun00004_ip = 997; continue _fun00003 }
 988:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1019; continue _fun00003 }
 997:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 30;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 1039; continue _fun00003;
 1019:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 10;
            yankee = foxtra[yankee];
            verify = romeon.bind(zuuluu)(yankee);
 1039:
            golfie = verify;
 1042:
            _fun00004_ip = 1064; continue _fun00003;
 1044:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 21;
            verify = romeon[verify];
            golfie = yankee.bind(zuuluu)(verify);
 1064:
            return golfie;
 1066:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 9;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            return golfie;
 1088:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 8;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            return golfie;
 1110:
            if(report) { _fun00004_ip = 1252; continue _fun00003 }
 1116:
            golfie = tangon.isNSFW;
            golfie = golfie.bind(tangon)();
            if(!golfie) { _fun00004_ip = 1164; continue _fun00003 }
 1129:
            if(!(option != oscard)) { _fun00004_ip = 1142; continue _fun00003 }
 1133:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 1164; continue _fun00003 }
 1142:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 25;
            golfie = yankee[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            _fun00004_ip = 1250; continue _fun00003;
 1164:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 23;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(tangon);
            if(!verify) { _fun00004_ip = 1227; continue _fun00003 }
 1192:
            if(!(option != oscard)) { _fun00004_ip = 1205; continue _fun00003 }
 1196:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1227; continue _fun00003 }
 1205:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 27;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 1247; continue _fun00003;
 1227:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 18;
            yankee = foxtra[yankee];
            verify = romeon.bind(zuuluu)(yankee);
 1247:
            golfie = verify;
 1250:
            _fun00004_ip = 1272; continue _fun00003;
 1252:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 21;
            verify = romeon[verify];
            golfie = yankee.bind(zuuluu)(verify);
 1272:
            return golfie;
 1274:
            if(report) { _fun00004_ip = 1452; continue _fun00003 }
 1280:
            golfie = tangon.isNSFW;
            golfie = golfie.bind(tangon)();
            if(!golfie) { _fun00004_ip = 1340; continue _fun00003 }
 1293:
            if(!(option != oscard)) { _fun00004_ip = 1306; continue _fun00003 }
 1297:
            golfie = oscard.ignoreTraits;
            if(golfie) { _fun00004_ip = 1340; continue _fun00003 }
 1306:
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            if(offset) { _fun00004_ip = 1326; continue _fun00003 }
 1317:
            golfie = 26;
            golfie = romeon[golfie];
            _fun00004_ip = 1333; continue _fun00003;
 1326:
            yankee = 25;
            golfie = romeon[yankee];
 1333:
            golfie = verify.bind(zuuluu)(golfie);
            _fun00004_ip = 1450; continue _fun00003;
 1340:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 23;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.bind(zuuluu)(tangon);
            if(!verify) { _fun00004_ip = 1415; continue _fun00003 }
 1368:
            if(!(option != oscard)) { _fun00004_ip = 1381; continue _fun00003 }
 1372:
            verify = oscard.ignoreTraits;
            if(verify) { _fun00004_ip = 1415; continue _fun00003 }
 1381:
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            if(offset) { _fun00004_ip = 1401; continue _fun00003 }
 1392:
            verify = 28;
            verify = foxtra[verify];
            _fun00004_ip = 1408; continue _fun00003;
 1401:
            romeon = 27;
            verify = foxtra[romeon];
 1408:
            verify = yankee.bind(zuuluu)(verify);
            _fun00004_ip = 1447; continue _fun00003;
 1415:
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            if(offset) { _fun00004_ip = 1435; continue _fun00003 }
 1426:
            offset = 17;
            offset = foxtra[offset];
            _fun00004_ip = 1442; continue _fun00003;
 1435:
            romeon = 18;
            offset = foxtra[romeon];
 1442:
            verify = yankee.bind(zuuluu)(offset);
 1447:
            golfie = verify;
 1450:
            _fun00004_ip = 1472; continue _fun00003;
 1452:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 21;
            verify = yankee[verify];
            golfie = offset.bind(zuuluu)(verify);
 1472:
            return golfie;
 1474:
            if(report) { _fun00004_ip = 1651; continue _fun00003 }
 1480:
            report = tangon.isNSFW;
            report = report.bind(tangon)();
            if(!report) { _fun00004_ip = 1528; continue _fun00003 }
 1493:
            if(!(option != oscard)) { _fun00004_ip = 1506; continue _fun00003 }
 1497:
            report = oscard.ignoreTraits;
            if(report) { _fun00004_ip = 1528; continue _fun00003 }
 1506:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            report = 22;
            report = verify[report];
            report = golfie.bind(zuuluu)(report);
            _fun00004_ip = 1649; continue _fun00003;
 1528:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golfie = 23;
            golfie = offset[golfie];
            golfie = verify.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(tangon);
            if(!golfie) { _fun00004_ip = 1591; continue _fun00003 }
 1556:
            if(!(option != oscard)) { _fun00004_ip = 1569; continue _fun00003 }
 1560:
            oscard = oscard.ignoreTraits;
            if(oscard) { _fun00004_ip = 1591; continue _fun00003 }
 1569:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 19;
            oscard = verify[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            _fun00004_ip = 1646; continue _fun00003;
 1591:
            golfie = tangon.linkedLobby;
            if(!(option == golfie)) { _fun00004_ip = 1623; continue _fun00003 }
 1601:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 7;
            golfie = verify[golfie];
            golfie = option.bind(zuuluu)(golfie);
            _fun00004_ip = 1643; continue _fun00003;
 1623:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 24;
            option = offset[option];
            golfie = verify.bind(zuuluu)(option);
 1643:
            oscard = golfie;
 1646:
            report = oscard;
 1649:
            _fun00004_ip = 1671; continue _fun00003;
 1651:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 21;
            oscard = option[oscard];
            report = golfie.bind(zuuluu)(oscard);
 1671:
            return report;
 1673:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 6;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            return report;
 1695:
            report = _closure1_slot7;
            tangon = tangon.type;
            tangon = report.bind(zuuluu)(tangon);
            return tangon;
 1711:
            return michal;
 1713:
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
            michal = entity.isRulesChannel;
            offset = entity.textFocused;
            option = entity.locked;
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 20;
            golfie = golfie[zuuluu];
            zuuluu = undefined;
            romeon = verify.bind(zuuluu)(golfie);
            yankee = romeon.shouldShowMembershipVerificationGate;
            verify = report.guild_id;
            foxtra = _closure1_slot4;
            golfie = new Array(3);
            golfie[0] = foxtra;
            foxtra = _closure1_slot5;
            golfie[1] = foxtra;
            foxtra = _closure1_slot3;
            golfie[2] = foxtra;
            golfie = yankee.bind(romeon)(verify, golfie);
            verify = report.isForumPost;
            verify = verify.bind(report)();
            if(verify) { _fun00006_ip = 1970; continue _fun00005 }
 121:
            verify = report.isMediaChannel;
            verify = verify.bind(report)();
            romeon = report.type;
            yankee = _closure1_slot6;
            yankee = yankee.PRIVATE_THREAD;
            if(!(yankee !== romeon)) { _fun00006_ip = 1942; continue _fun00005 }
 153:
            yankee = _closure1_slot6;
            yankee = yankee.ANNOUNCEMENT_THREAD;
            if(!(yankee !== romeon)) { _fun00006_ip = 1914; continue _fun00005 }
 170:
            yankee = _closure1_slot6;
            yankee = yankee.PUBLIC_THREAD;
            if(!(yankee !== romeon)) { _fun00006_ip = 1914; continue _fun00005 }
 187:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_CATEGORY;
            if(!(yankee !== romeon)) { _fun00006_ip = 1886; continue _fun00005 }
 204:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_TEXT;
            if(!(yankee !== romeon)) { _fun00006_ip = 1654; continue _fun00005 }
 221:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_FORUM;
            if(!(yankee !== romeon)) { _fun00006_ip = 1391; continue _fun00005 }
 238:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_MEDIA;
            if(!(yankee !== romeon)) { _fun00006_ip = 1203; continue _fun00005 }
 255:
            yankee = _closure1_slot6;
            yankee = yankee.GROUP_DM;
            if(!(yankee !== romeon)) { _fun00006_ip = 1175; continue _fun00005 }
 272:
            yankee = _closure1_slot6;
            yankee = yankee.DM;
            if(!(yankee !== romeon)) { _fun00006_ip = 1147; continue _fun00005 }
 289:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_ANNOUNCEMENT;
            if(!(yankee !== romeon)) { _fun00006_ip = 959; continue _fun00005 }
 306:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_STAGE_VOICE;
            if(!(yankee !== romeon)) { _fun00006_ip = 717; continue _fun00005 }
 323:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_VOICE;
            if(!(yankee !== romeon)) { _fun00006_ip = 381; continue _fun00005 }
 337:
            yankee = _closure1_slot6;
            yankee = yankee.GUILD_DIRECTORY;
            if(!(yankee !== romeon)) { _fun00006_ip = 353; continue _fun00005 }
 351:
            return zuuluu;
 353:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 59;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.HubIcon;
            return yankee;
 381:
            if(offset) { _fun00006_ip = 689; continue _fun00005 }
 387:
            if(!golfie) { _fun00006_ip = 482; continue _fun00005 }
 390:
            if(!(oscard != tangon)) { _fun00006_ip = 403; continue _fun00005 }
 394:
            offset = tangon.ignoreTraits;
            if(offset) { _fun00006_ip = 482; continue _fun00005 }
 403:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 23;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(report);
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            if(offset) { _fun00006_ip = 459; continue _fun00005 }
 439:
            offset = 56;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            offset = offset.VoiceLockIcon;
            _fun00006_ip = 477; continue _fun00005;
 459:
            yankee = 53;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            offset = yankee.LockIcon;
 477:
            _fun00006_ip = 687; continue _fun00005;
 482:
            if(!option) { _fun00006_ip = 529; continue _fun00005 }
 485:
            if(!(oscard != tangon)) { _fun00006_ip = 498; continue _fun00005 }
 489:
            yankee = tangon.ignoreTraits;
            if(yankee) { _fun00006_ip = 529; continue _fun00005 }
 498:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 53;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.LockIcon;
            _fun00006_ip = 684; continue _fun00005;
 529:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 23;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.bind(zuuluu)(report);
            if(!romeon) { _fun00006_ip = 598; continue _fun00005 }
 557:
            if(!(oscard != tangon)) { _fun00006_ip = 570; continue _fun00005 }
 561:
            romeon = tangon.ignoreTraits;
            if(romeon) { _fun00006_ip = 598; continue _fun00005 }
 570:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 56;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.VoiceLockIcon;
            _fun00006_ip = 681; continue _fun00005;
 598:
            foxtra = report.isNSFW;
            foxtra = foxtra.bind(report)();
            if(!foxtra) { _fun00006_ip = 652; continue _fun00005 }
 611:
            if(!(oscard != tangon)) { _fun00006_ip = 624; continue _fun00005 }
 615:
            foxtra = tangon.ignoreTraits;
            if(foxtra) { _fun00006_ip = 652; continue _fun00005 }
 624:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 57;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            foxtra = foxtra.VoiceWarningIcon;
            _fun00006_ip = 678; continue _fun00005;
 652:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            backup = 58;
            backup = sizing[backup];
            backup = kiloes.bind(zuuluu)(backup);
            foxtra = backup.VoiceNormalIcon;
 678:
            romeon = foxtra;
 681:
            yankee = romeon;
 684:
            offset = yankee;
 687:
            _fun00006_ip = 715; continue _fun00005;
 689:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 33;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            offset = yankee.ChatIcon;
 715:
            return offset;
 717:
            if(!golfie) { _fun00006_ip = 812; continue _fun00005 }
 720:
            if(!(oscard != tangon)) { _fun00006_ip = 733; continue _fun00005 }
 724:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 812; continue _fun00005 }
 733:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 23;
            golfie = yankee[golfie];
            golfie = offset.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(report);
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            if(golfie) { _fun00006_ip = 789; continue _fun00005 }
 769:
            golfie = 54;
            golfie = romeon[golfie];
            golfie = yankee.bind(zuuluu)(golfie);
            golfie = golfie.StageLockIcon;
            _fun00006_ip = 807; continue _fun00005;
 789:
            offset = 53;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            golfie = offset.LockIcon;
 807:
            _fun00006_ip = 957; continue _fun00005;
 812:
            if(!option) { _fun00006_ip = 856; continue _fun00005 }
 815:
            if(!(oscard != tangon)) { _fun00006_ip = 828; continue _fun00005 }
 819:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 856; continue _fun00005 }
 828:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 53;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.LockIcon;
            _fun00006_ip = 954; continue _fun00005;
 856:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 23;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(report);
            if(!offset) { _fun00006_ip = 925; continue _fun00005 }
 884:
            if(!(oscard != tangon)) { _fun00006_ip = 897; continue _fun00005 }
 888:
            offset = tangon.ignoreTraits;
            if(offset) { _fun00006_ip = 925; continue _fun00005 }
 897:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 54;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            offset = offset.StageLockIcon;
            _fun00006_ip = 951; continue _fun00005;
 925:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 55;
            yankee = foxtra[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            offset = yankee.StageIcon;
 951:
            option = offset;
 954:
            golfie = option;
 957:
            return golfie;
 959:
            if(michal) { _fun00006_ip = 1119; continue _fun00005 }
 965:
            golfie = report.isNSFW;
            golfie = golfie.bind(report)();
            if(!golfie) { _fun00006_ip = 1019; continue _fun00005 }
 978:
            if(!(oscard != tangon)) { _fun00006_ip = 991; continue _fun00005 }
 982:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 1019; continue _fun00005 }
 991:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 50;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.AnnouncementsWarningIcon;
            _fun00006_ip = 1117; continue _fun00005;
 1019:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 23;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.bind(zuuluu)(report);
            if(!option) { _fun00006_ip = 1088; continue _fun00005 }
 1047:
            if(!(oscard != tangon)) { _fun00006_ip = 1060; continue _fun00005 }
 1051:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1088; continue _fun00005 }
 1060:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 51;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.AnnouncementsLockIcon;
            _fun00006_ip = 1114; continue _fun00005;
 1088:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 52;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            option = offset.AnnouncementsIcon;
 1114:
            golfie = option;
 1117:
            _fun00006_ip = 1145; continue _fun00005;
 1119:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 37;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            golfie = option.BookCheckIcon;
 1145:
            return golfie;
 1147:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 49;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.AtIcon;
            return golfie;
 1175:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 48;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.GroupIcon;
            return golfie;
 1203:
            if(michal) { _fun00006_ip = 1363; continue _fun00005 }
 1209:
            golfie = report.isNSFW;
            golfie = golfie.bind(report)();
            if(!golfie) { _fun00006_ip = 1263; continue _fun00005 }
 1222:
            if(!(oscard != tangon)) { _fun00006_ip = 1235; continue _fun00005 }
 1226:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 1263; continue _fun00005 }
 1235:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 42;
            golfie = offset[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.ImageWarningIcon;
            _fun00006_ip = 1361; continue _fun00005;
 1263:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 23;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.bind(zuuluu)(report);
            if(!option) { _fun00006_ip = 1332; continue _fun00005 }
 1291:
            if(!(oscard != tangon)) { _fun00006_ip = 1304; continue _fun00005 }
 1295:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1332; continue _fun00005 }
 1304:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 44;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.ImageLockIcon;
            _fun00006_ip = 1358; continue _fun00005;
 1332:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 46;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            option = offset.ImageIcon;
 1358:
            golfie = option;
 1361:
            _fun00006_ip = 1389; continue _fun00005;
 1363:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 37;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            golfie = option.BookCheckIcon;
 1389:
            return golfie;
 1391:
            if(michal) { _fun00006_ip = 1626; continue _fun00005 }
 1397:
            golfie = report.isNSFW;
            golfie = golfie.bind(report)();
            if(!golfie) { _fun00006_ip = 1477; continue _fun00005 }
 1410:
            if(!(oscard != tangon)) { _fun00006_ip = 1423; continue _fun00005 }
 1414:
            golfie = tangon.ignoreTraits;
            if(golfie) { _fun00006_ip = 1477; continue _fun00005 }
 1423:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            if(verify) { _fun00006_ip = 1454; continue _fun00005 }
 1434:
            golfie = 43;
            golfie = yankee[golfie];
            golfie = offset.bind(zuuluu)(golfie);
            golfie = golfie.ForumWarningIcon;
            _fun00006_ip = 1472; continue _fun00005;
 1454:
            option = 42;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            golfie = option.ImageWarningIcon;
 1472:
            _fun00006_ip = 1624; continue _fun00005;
 1477:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 23;
            option = yankee[option];
            option = offset.bind(zuuluu)(option);
            option = option.bind(zuuluu)(report);
            if(!option) { _fun00006_ip = 1569; continue _fun00005 }
 1505:
            if(!(oscard != tangon)) { _fun00006_ip = 1518; continue _fun00005 }
 1509:
            option = tangon.ignoreTraits;
            if(option) { _fun00006_ip = 1569; continue _fun00005 }
 1518:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            if(verify) { _fun00006_ip = 1549; continue _fun00005 }
 1529:
            option = 45;
            option = romeon[option];
            option = yankee.bind(zuuluu)(option);
            option = option.ForumLockIcon;
            _fun00006_ip = 1567; continue _fun00005;
 1549:
            offset = 44;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            option = offset.ImageLockIcon;
 1567:
            _fun00006_ip = 1621; continue _fun00005;
 1569:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            if(verify) { _fun00006_ip = 1600; continue _fun00005 }
 1580:
            verify = 47;
            verify = romeon[verify];
            verify = yankee.bind(zuuluu)(verify);
            verify = verify.ForumIcon;
            _fun00006_ip = 1618; continue _fun00005;
 1600:
            offset = 46;
            offset = romeon[offset];
            offset = yankee.bind(zuuluu)(offset);
            verify = offset.ImageIcon;
 1618:
            option = verify;
 1621:
            golfie = option;
 1624:
            _fun00006_ip = 1652; continue _fun00005;
 1626:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 37;
            option = offset[option];
            option = verify.bind(zuuluu)(option);
            golfie = option.BookCheckIcon;
 1652:
            return golfie;
 1654:
            if(michal) { _fun00006_ip = 1858; continue _fun00005 }
 1660:
            michal = report.isNSFW;
            michal = michal.bind(report)();
            if(!michal) { _fun00006_ip = 1717; continue _fun00005 }
 1673:
            if(!(oscard != tangon)) { _fun00006_ip = 1686; continue _fun00005 }
 1677:
            michal = tangon.ignoreTraits;
            if(michal) { _fun00006_ip = 1717; continue _fun00005 }
 1686:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 38;
            michal = option[michal];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.TextWarningIcon;
            _fun00006_ip = 1856; continue _fun00005;
 1717:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 23;
            golfie = verify[golfie];
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.bind(zuuluu)(report);
            if(!golfie) { _fun00006_ip = 1786; continue _fun00005 }
 1745:
            if(!(oscard != tangon)) { _fun00006_ip = 1758; continue _fun00005 }
 1749:
            tangon = tangon.ignoreTraits;
            if(tangon) { _fun00006_ip = 1786; continue _fun00005 }
 1758:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 39;
            tangon = option[tangon];
            tangon = golfie.bind(zuuluu)(tangon);
            tangon = tangon.TextLockIcon;
            _fun00006_ip = 1853; continue _fun00005;
 1786:
            report = report.linkedLobby;
            if(!(oscard == report)) { _fun00006_ip = 1824; continue _fun00005 }
 1796:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 41;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            report = report.TextIcon;
            _fun00006_ip = 1850; continue _fun00005;
 1824:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 40;
            oscard = option[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            report = oscard.TextControllerIcon;
 1850:
            tangon = report;
 1853:
            michal = tangon;
 1856:
            _fun00006_ip = 1884; continue _fun00005;
 1858:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 37;
            tangon = oscard[tangon];
            tangon = report.bind(zuuluu)(tangon);
            michal = tangon.BookCheckIcon;
 1884:
            return michal;
 1886:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 36;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.FolderIcon;
            return michal;
 1914:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 35;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ThreadIcon;
            return michal;
 1942:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 34;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ThreadLockIcon;
            return michal;
 1970:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 33;
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
    golfie = 60;
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
            entity = 59;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.HubIcon;
            return entity;
 257:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 58;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.VoiceNormalIcon;
            return entity;
 287:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 55;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.StageIcon;
            return entity;
 317:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 52;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.AnnouncementsIcon;
            return entity;
 347:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 49;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.AtIcon;
            return entity;
 377:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 48;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.GroupIcon;
            return entity;
 407:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 46;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.ImageIcon;
            return entity;
 437:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 47;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.ForumIcon;
            return entity;
 467:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 41;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.TextIcon;
            return entity;
 497:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 36;
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
            entity = 35;
            michal = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            entity = entity.ThreadIcon;
            _fun00016_ip = 590; continue _fun00015;
 570:
            michal = 33;
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