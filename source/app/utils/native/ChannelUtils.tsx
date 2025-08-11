// app/utils/native/ChannelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function getThreadChannelIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot6;
            var2 = var2.PRIVATE_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 76; continue _fun0001 }
 20:
            var2 = _closure1_slot6;
            var2 = var2.ANNOUNCEMENT_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 52; continue _fun0001 }
 34:
            var2 = _closure1_slot6;
            var2 = var2.PUBLIC_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 52; continue _fun0001 }
 48:
            var2 = null;
            return var2;
 52:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 76:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function getChannelIcon(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var8 = null;
            var1 = var6;
            if(!(var8 == var1)) { _fun0002_ip = 17; continue _fun0002 }
 15:
            var1 = {};
 17:
            var7 = var1.isRulesChannel;
            var12 = var1.textFocused;
            var10 = var1.locked;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 20;
            var2 = var3[var2];
            var3 = undefined;
            var11 = var5.bind(var3)(var2);
            var9 = var11.shouldShowMembershipVerificationGate;
            var5 = var4.guild_id;
            var13 = _closure1_slot4;
            var2 = new Array(3);
            var2[0] = var13;
            var13 = _closure1_slot5;
            var2[1] = var13;
            var13 = _closure1_slot3;
            var2[2] = var13;
            var9 = var9.bind(var11)(var5, var2);
            var2 = var4.isForumPost;
            var2 = var2.bind(var4)();
            if(var2) { _fun0002_ip = 1694; continue _fun0002 }
 121:
            var5 = _closure1_slot7;
            var2 = var4.type;
            var2 = var5.bind(var3)(var2);
            if(!(var8 == var2)) { _fun0002_ip = 1692; continue _fun0002 }
 142:
            var5 = var4.isMediaChannel;
            var11 = var5.bind(var4)();
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 21;
            var5 = var14[var5];
            var13 = var13.bind(var3)(var5);
            var5 = var13.isChannelNSFWWithoutGuildRollup;
            var5 = var5.bind(var13)(var4);
            var14 = var4.type;
            var13 = _closure1_slot6;
            var13 = var13.PRIVATE_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 1676; continue _fun0002 }
 205:
            var13 = _closure1_slot6;
            var13 = var13.ANNOUNCEMENT_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 1676; continue _fun0002 }
 222:
            var13 = _closure1_slot6;
            var13 = var13.PUBLIC_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 1676; continue _fun0002 }
 239:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_CATEGORY;
            if(!(var13 !== var14)) { _fun0002_ip = 1654; continue _fun0002 }
 256:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_TEXT;
            if(!(var13 !== var14)) { _fun0002_ip = 1465; continue _fun0002 }
 273:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_FORUM;
            if(!(var13 !== var14)) { _fun0002_ip = 1275; continue _fun0002 }
 290:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_MEDIA;
            if(!(var13 !== var14)) { _fun0002_ip = 1121; continue _fun0002 }
 307:
            var13 = _closure1_slot6;
            var13 = var13.GROUP_DM;
            if(!(var13 !== var14)) { _fun0002_ip = 1099; continue _fun0002 }
 324:
            var13 = _closure1_slot6;
            var13 = var13.DM;
            if(!(var13 !== var14)) { _fun0002_ip = 1077; continue _fun0002 }
 341:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_ANNOUNCEMENT;
            if(!(var13 !== var14)) { _fun0002_ip = 923; continue _fun0002 }
 358:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var13 !== var14)) { _fun0002_ip = 711; continue _fun0002 }
 375:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_VOICE;
            if(!(var13 !== var14)) { _fun0002_ip = 427; continue _fun0002 }
 389:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_DIRECTORY;
            if(!(var13 !== var14)) { _fun0002_ip = 405; continue _fun0002 }
 403:
            return var8;
 405:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 13;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            return var13;
 427:
            if(var12) { _fun0002_ip = 689; continue _fun0002 }
 433:
            if(!var9) { _fun0002_ip = 516; continue _fun0002 }
 436:
            if(!(var8 != var6)) { _fun0002_ip = 449; continue _fun0002 }
 440:
            var12 = var6.ignoreTraits;
            if(var12) { _fun0002_ip = 516; continue _fun0002 }
 449:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 24;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.bind(var3)(var4);
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var12) { _fun0002_ip = 499; continue _fun0002 }
 485:
            var12 = 14;
            var12 = var15[var12];
            var12 = var14.bind(var3)(var12);
            _fun0002_ip = 511; continue _fun0002;
 499:
            var13 = 32;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
 511:
            _fun0002_ip = 687; continue _fun0002;
 516:
            if(!var10) { _fun0002_ip = 557; continue _fun0002 }
 519:
            if(!(var8 != var6)) { _fun0002_ip = 532; continue _fun0002 }
 523:
            var13 = var6.ignoreTraits;
            if(var13) { _fun0002_ip = 557; continue _fun0002 }
 532:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 32;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            _fun0002_ip = 684; continue _fun0002;
 557:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 24;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.bind(var3)(var4);
            if(!var14) { _fun0002_ip = 620; continue _fun0002 }
 585:
            if(!(var8 != var6)) { _fun0002_ip = 598; continue _fun0002 }
 589:
            var14 = var6.ignoreTraits;
            if(var14) { _fun0002_ip = 620; continue _fun0002 }
 598:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 14;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            _fun0002_ip = 681; continue _fun0002;
 620:
            if(!var5) { _fun0002_ip = 658; continue _fun0002 }
 623:
            if(!(var8 != var6)) { _fun0002_ip = 636; continue _fun0002 }
 627:
            var15 = var6.ignoreTraits;
            if(var15) { _fun0002_ip = 658; continue _fun0002 }
 636:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 33;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            _fun0002_ip = 678; continue _fun0002;
 658:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 12;
            var16 = var18[var16];
            var15 = var17.bind(var3)(var16);
 678:
            var14 = var15;
 681:
            var13 = var14;
 684:
            var12 = var13;
 687:
            _fun0002_ip = 709; continue _fun0002;
 689:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 16;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
 709:
            return var12;
 711:
            if(!var9) { _fun0002_ip = 794; continue _fun0002 }
 714:
            if(!(var8 != var6)) { _fun0002_ip = 727; continue _fun0002 }
 718:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 794; continue _fun0002 }
 727:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 24;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.bind(var3)(var4);
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var9) { _fun0002_ip = 777; continue _fun0002 }
 763:
            var9 = 15;
            var9 = var14[var9];
            var9 = var13.bind(var3)(var9);
            _fun0002_ip = 789; continue _fun0002;
 777:
            var12 = 32;
            var12 = var14[var12];
            var9 = var13.bind(var3)(var12);
 789:
            _fun0002_ip = 921; continue _fun0002;
 794:
            if(!var10) { _fun0002_ip = 832; continue _fun0002 }
 797:
            if(!(var8 != var6)) { _fun0002_ip = 810; continue _fun0002 }
 801:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 832; continue _fun0002 }
 810:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 32;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 918; continue _fun0002;
 832:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 24;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.bind(var3)(var4);
            if(!var12) { _fun0002_ip = 895; continue _fun0002 }
 860:
            if(!(var8 != var6)) { _fun0002_ip = 873; continue _fun0002 }
 864:
            var12 = var6.ignoreTraits;
            if(var12) { _fun0002_ip = 895; continue _fun0002 }
 873:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 15;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            _fun0002_ip = 915; continue _fun0002;
 895:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 11;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
 915:
            var10 = var12;
 918:
            var9 = var10;
 921:
            return var9;
 923:
            if(var7) { _fun0002_ip = 1055; continue _fun0002 }
 929:
            if(!var5) { _fun0002_ip = 967; continue _fun0002 }
 932:
            if(!(var8 != var6)) { _fun0002_ip = 945; continue _fun0002 }
 936:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 967; continue _fun0002 }
 945:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 30;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 1053; continue _fun0002;
 967:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 24;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 1030; continue _fun0002 }
 995:
            if(!(var8 != var6)) { _fun0002_ip = 1008; continue _fun0002 }
 999:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 1030; continue _fun0002 }
 1008:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 1050; continue _fun0002;
 1030:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 10;
            var12 = var14[var12];
            var10 = var13.bind(var3)(var12);
 1050:
            var9 = var10;
 1053:
            _fun0002_ip = 1075; continue _fun0002;
 1055:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 22;
            var10 = var13[var10];
            var9 = var12.bind(var3)(var10);
 1075:
            return var9;
 1077:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 9;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            return var9;
 1099:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 8;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            return var9;
 1121:
            if(var7) { _fun0002_ip = 1253; continue _fun0002 }
 1127:
            if(!var5) { _fun0002_ip = 1165; continue _fun0002 }
 1130:
            if(!(var8 != var6)) { _fun0002_ip = 1143; continue _fun0002 }
 1134:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 1165; continue _fun0002 }
 1143:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 26;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 1251; continue _fun0002;
 1165:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 24;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 1228; continue _fun0002 }
 1193:
            if(!(var8 != var6)) { _fun0002_ip = 1206; continue _fun0002 }
 1197:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 1228; continue _fun0002 }
 1206:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 28;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 1248; continue _fun0002;
 1228:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 18;
            var12 = var14[var12];
            var10 = var13.bind(var3)(var12);
 1248:
            var9 = var10;
 1251:
            _fun0002_ip = 1273; continue _fun0002;
 1253:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 22;
            var10 = var13[var10];
            var9 = var12.bind(var3)(var10);
 1273:
            return var9;
 1275:
            if(var7) { _fun0002_ip = 1443; continue _fun0002 }
 1281:
            if(!var5) { _fun0002_ip = 1331; continue _fun0002 }
 1284:
            if(!(var8 != var6)) { _fun0002_ip = 1297; continue _fun0002 }
 1288:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 1331; continue _fun0002 }
 1297:
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var11) { _fun0002_ip = 1317; continue _fun0002 }
 1308:
            var9 = 27;
            var9 = var13[var9];
            _fun0002_ip = 1324; continue _fun0002;
 1317:
            var12 = 26;
            var9 = var13[var12];
 1324:
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 1441; continue _fun0002;
 1331:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 24;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 1406; continue _fun0002 }
 1359:
            if(!(var8 != var6)) { _fun0002_ip = 1372; continue _fun0002 }
 1363:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 1406; continue _fun0002 }
 1372:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var11) { _fun0002_ip = 1392; continue _fun0002 }
 1383:
            var10 = 29;
            var10 = var14[var10];
            _fun0002_ip = 1399; continue _fun0002;
 1392:
            var13 = 28;
            var10 = var14[var13];
 1399:
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 1438; continue _fun0002;
 1406:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var11) { _fun0002_ip = 1426; continue _fun0002 }
 1417:
            var11 = 17;
            var11 = var14[var11];
            _fun0002_ip = 1433; continue _fun0002;
 1426:
            var13 = 18;
            var11 = var14[var13];
 1433:
            var10 = var12.bind(var3)(var11);
 1438:
            var9 = var10;
 1441:
            _fun0002_ip = 1463; continue _fun0002;
 1443:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 22;
            var10 = var12[var10];
            var9 = var11.bind(var3)(var10);
 1463:
            return var9;
 1465:
            if(var7) { _fun0002_ip = 1632; continue _fun0002 }
 1471:
            if(!var5) { _fun0002_ip = 1509; continue _fun0002 }
 1474:
            if(!(var8 != var6)) { _fun0002_ip = 1487; continue _fun0002 }
 1478:
            var5 = var6.ignoreTraits;
            if(var5) { _fun0002_ip = 1509; continue _fun0002 }
 1487:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 23;
            var5 = var9[var5];
            var5 = var7.bind(var3)(var5);
            _fun0002_ip = 1630; continue _fun0002;
 1509:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 24;
            var7 = var10[var7];
            var7 = var9.bind(var3)(var7);
            var7 = var7.bind(var3)(var4);
            if(!var7) { _fun0002_ip = 1572; continue _fun0002 }
 1537:
            if(!(var8 != var6)) { _fun0002_ip = 1550; continue _fun0002 }
 1541:
            var6 = var6.ignoreTraits;
            if(var6) { _fun0002_ip = 1572; continue _fun0002 }
 1550:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 19;
            var6 = var9[var6];
            var6 = var7.bind(var3)(var6);
            _fun0002_ip = 1627; continue _fun0002;
 1572:
            var7 = var4.linkedLobby;
            if(!(var8 == var7)) { _fun0002_ip = 1604; continue _fun0002 }
 1582:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            _fun0002_ip = 1624; continue _fun0002;
 1604:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 25;
            var8 = var10[var8];
            var7 = var9.bind(var3)(var8);
 1624:
            var6 = var7;
 1627:
            var5 = var6;
 1630:
            _fun0002_ip = 1652; continue _fun0002;
 1632:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 22;
            var6 = var8[var6];
            var5 = var7.bind(var3)(var6);
 1652:
            return var5;
 1654:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            return var5;
 1676:
            var5 = _closure1_slot7;
            var4 = var4.type;
            var4 = var5.bind(var3)(var4);
            return var4;
 1692:
            return var2;
 1694:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 16;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function getChannelIconComponent(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var6 = null;
            var1 = var4;
            if(!(var6 == var1)) { _fun0003_ip = 17; continue _fun0003 }
 15:
            var1 = {};
 17:
            var7 = var1.isRulesChannel;
            var11 = var1.textFocused;
            var9 = var1.locked;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 20;
            var2 = var3[var2];
            var3 = undefined;
            var12 = var8.bind(var3)(var2);
            var10 = var12.shouldShowMembershipVerificationGate;
            var8 = var5.guild_id;
            var13 = _closure1_slot4;
            var2 = new Array(3);
            var2[0] = var13;
            var13 = _closure1_slot5;
            var2[1] = var13;
            var13 = _closure1_slot3;
            var2[2] = var13;
            var8 = var10.bind(var12)(var8, var2);
            var2 = var5.isForumPost;
            var2 = var2.bind(var5)();
            if(var2) { _fun0003_ip = 1951; continue _fun0003 }
 121:
            var2 = var5.isMediaChannel;
            var10 = var2.bind(var5)();
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 21;
            var2 = var13[var2];
            var12 = var12.bind(var3)(var2);
            var2 = var12.isChannelNSFWWithoutGuildRollup;
            var2 = var2.bind(var12)(var5);
            var13 = var5.type;
            var12 = _closure1_slot6;
            var12 = var12.PRIVATE_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 1923; continue _fun0003 }
 184:
            var12 = _closure1_slot6;
            var12 = var12.ANNOUNCEMENT_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 1895; continue _fun0003 }
 201:
            var12 = _closure1_slot6;
            var12 = var12.PUBLIC_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 1895; continue _fun0003 }
 218:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_CATEGORY;
            if(!(var12 !== var13)) { _fun0003_ip = 1867; continue _fun0003 }
 235:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_TEXT;
            if(!(var12 !== var13)) { _fun0003_ip = 1645; continue _fun0003 }
 252:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_FORUM;
            if(!(var12 !== var13)) { _fun0003_ip = 1392; continue _fun0003 }
 269:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_MEDIA;
            if(!(var12 !== var13)) { _fun0003_ip = 1214; continue _fun0003 }
 286:
            var12 = _closure1_slot6;
            var12 = var12.GROUP_DM;
            if(!(var12 !== var13)) { _fun0003_ip = 1186; continue _fun0003 }
 303:
            var12 = _closure1_slot6;
            var12 = var12.DM;
            if(!(var12 !== var13)) { _fun0003_ip = 1158; continue _fun0003 }
 320:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_ANNOUNCEMENT;
            if(!(var12 !== var13)) { _fun0003_ip = 980; continue _fun0003 }
 337:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 738; continue _fun0003 }
 354:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 412; continue _fun0003 }
 368:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_DIRECTORY;
            if(!(var12 !== var13)) { _fun0003_ip = 384; continue _fun0003 }
 382:
            return var3;
 384:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 60;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.HubIcon;
            return var12;
 412:
            if(var11) { _fun0003_ip = 710; continue _fun0003 }
 418:
            if(!var8) { _fun0003_ip = 513; continue _fun0003 }
 421:
            if(!(var6 != var4)) { _fun0003_ip = 434; continue _fun0003 }
 425:
            var11 = var4.ignoreTraits;
            if(var11) { _fun0003_ip = 513; continue _fun0003 }
 434:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 24;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.bind(var3)(var5);
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var11) { _fun0003_ip = 490; continue _fun0003 }
 470:
            var11 = 57;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.VoiceLockIcon;
            _fun0003_ip = 508; continue _fun0003;
 490:
            var12 = 54;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.LockIcon;
 508:
            _fun0003_ip = 708; continue _fun0003;
 513:
            if(!var9) { _fun0003_ip = 560; continue _fun0003 }
 516:
            if(!(var6 != var4)) { _fun0003_ip = 529; continue _fun0003 }
 520:
            var12 = var4.ignoreTraits;
            if(var12) { _fun0003_ip = 560; continue _fun0003 }
 529:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 54;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.LockIcon;
            _fun0003_ip = 705; continue _fun0003;
 560:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 24;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.bind(var3)(var5);
            if(!var13) { _fun0003_ip = 629; continue _fun0003 }
 588:
            if(!(var6 != var4)) { _fun0003_ip = 601; continue _fun0003 }
 592:
            var13 = var4.ignoreTraits;
            if(var13) { _fun0003_ip = 629; continue _fun0003 }
 601:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 57;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.VoiceLockIcon;
            _fun0003_ip = 702; continue _fun0003;
 629:
            if(!var2) { _fun0003_ip = 673; continue _fun0003 }
 632:
            if(!(var6 != var4)) { _fun0003_ip = 645; continue _fun0003 }
 636:
            var14 = var4.ignoreTraits;
            if(var14) { _fun0003_ip = 673; continue _fun0003 }
 645:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 58;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.VoiceWarningIcon;
            _fun0003_ip = 699; continue _fun0003;
 673:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 59;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            var14 = var15.VoiceNormalIcon;
 699:
            var13 = var14;
 702:
            var12 = var13;
 705:
            var11 = var12;
 708:
            _fun0003_ip = 736; continue _fun0003;
 710:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 34;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.ChatIcon;
 736:
            return var11;
 738:
            if(!var8) { _fun0003_ip = 833; continue _fun0003 }
 741:
            if(!(var6 != var4)) { _fun0003_ip = 754; continue _fun0003 }
 745:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 833; continue _fun0003 }
 754:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 24;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var8) { _fun0003_ip = 810; continue _fun0003 }
 790:
            var8 = 55;
            var8 = var13[var8];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StageLockIcon;
            _fun0003_ip = 828; continue _fun0003;
 810:
            var11 = 54;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var8 = var11.LockIcon;
 828:
            _fun0003_ip = 978; continue _fun0003;
 833:
            if(!var9) { _fun0003_ip = 877; continue _fun0003 }
 836:
            if(!(var6 != var4)) { _fun0003_ip = 849; continue _fun0003 }
 840:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 877; continue _fun0003 }
 849:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 54;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.LockIcon;
            _fun0003_ip = 975; continue _fun0003;
 877:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 24;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.bind(var3)(var5);
            if(!var11) { _fun0003_ip = 946; continue _fun0003 }
 905:
            if(!(var6 != var4)) { _fun0003_ip = 918; continue _fun0003 }
 909:
            var11 = var4.ignoreTraits;
            if(var11) { _fun0003_ip = 946; continue _fun0003 }
 918:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 55;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.StageLockIcon;
            _fun0003_ip = 972; continue _fun0003;
 946:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 56;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.StageIcon;
 972:
            var9 = var11;
 975:
            var8 = var9;
 978:
            return var8;
 980:
            if(var7) { _fun0003_ip = 1130; continue _fun0003 }
 986:
            if(!var2) { _fun0003_ip = 1030; continue _fun0003 }
 989:
            if(!(var6 != var4)) { _fun0003_ip = 1002; continue _fun0003 }
 993:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 1030; continue _fun0003 }
 1002:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 51;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AnnouncementsWarningIcon;
            _fun0003_ip = 1128; continue _fun0003;
 1030:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 24;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 1099; continue _fun0003 }
 1058:
            if(!(var6 != var4)) { _fun0003_ip = 1071; continue _fun0003 }
 1062:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 1099; continue _fun0003 }
 1071:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 52;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.AnnouncementsLockIcon;
            _fun0003_ip = 1125; continue _fun0003;
 1099:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 53;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.AnnouncementsIcon;
 1125:
            var8 = var9;
 1128:
            _fun0003_ip = 1156; continue _fun0003;
 1130:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 38;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
 1156:
            return var8;
 1158:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 50;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AtIcon;
            return var8;
 1186:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 49;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.GroupIcon;
            return var8;
 1214:
            if(var7) { _fun0003_ip = 1364; continue _fun0003 }
 1220:
            if(!var2) { _fun0003_ip = 1264; continue _fun0003 }
 1223:
            if(!(var6 != var4)) { _fun0003_ip = 1236; continue _fun0003 }
 1227:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 1264; continue _fun0003 }
 1236:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 43;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.ImageWarningIcon;
            _fun0003_ip = 1362; continue _fun0003;
 1264:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 24;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 1333; continue _fun0003 }
 1292:
            if(!(var6 != var4)) { _fun0003_ip = 1305; continue _fun0003 }
 1296:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 1333; continue _fun0003 }
 1305:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 45;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.ImageLockIcon;
            _fun0003_ip = 1359; continue _fun0003;
 1333:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 47;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.ImageIcon;
 1359:
            var8 = var9;
 1362:
            _fun0003_ip = 1390; continue _fun0003;
 1364:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 38;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
 1390:
            return var8;
 1392:
            if(var7) { _fun0003_ip = 1617; continue _fun0003 }
 1398:
            if(!var2) { _fun0003_ip = 1468; continue _fun0003 }
 1401:
            if(!(var6 != var4)) { _fun0003_ip = 1414; continue _fun0003 }
 1405:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 1468; continue _fun0003 }
 1414:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var10) { _fun0003_ip = 1445; continue _fun0003 }
 1425:
            var8 = 44;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.ForumWarningIcon;
            _fun0003_ip = 1463; continue _fun0003;
 1445:
            var9 = 43;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.ImageWarningIcon;
 1463:
            _fun0003_ip = 1615; continue _fun0003;
 1468:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 24;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 1560; continue _fun0003 }
 1496:
            if(!(var6 != var4)) { _fun0003_ip = 1509; continue _fun0003 }
 1500:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 1560; continue _fun0003 }
 1509:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var10) { _fun0003_ip = 1540; continue _fun0003 }
 1520:
            var9 = 46;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.ForumLockIcon;
            _fun0003_ip = 1558; continue _fun0003;
 1540:
            var11 = 45;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.ImageLockIcon;
 1558:
            _fun0003_ip = 1612; continue _fun0003;
 1560:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var10) { _fun0003_ip = 1591; continue _fun0003 }
 1571:
            var10 = 48;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.ForumIcon;
            _fun0003_ip = 1609; continue _fun0003;
 1591:
            var11 = 47;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var10 = var11.ImageIcon;
 1609:
            var9 = var10;
 1612:
            var8 = var9;
 1615:
            _fun0003_ip = 1643; continue _fun0003;
 1617:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 38;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
 1643:
            return var8;
 1645:
            if(var7) { _fun0003_ip = 1839; continue _fun0003 }
 1651:
            if(!var2) { _fun0003_ip = 1698; continue _fun0003 }
 1654:
            if(!(var6 != var4)) { _fun0003_ip = 1667; continue _fun0003 }
 1658:
            var2 = var4.ignoreTraits;
            if(var2) { _fun0003_ip = 1698; continue _fun0003 }
 1667:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 39;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.TextWarningIcon;
            _fun0003_ip = 1837; continue _fun0003;
 1698:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 24;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.bind(var3)(var5);
            if(!var7) { _fun0003_ip = 1767; continue _fun0003 }
 1726:
            if(!(var6 != var4)) { _fun0003_ip = 1739; continue _fun0003 }
 1730:
            var4 = var4.ignoreTraits;
            if(var4) { _fun0003_ip = 1767; continue _fun0003 }
 1739:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 40;
            var4 = var8[var4];
            var4 = var7.bind(var3)(var4);
            var4 = var4.TextLockIcon;
            _fun0003_ip = 1834; continue _fun0003;
 1767:
            var5 = var5.linkedLobby;
            if(!(var6 == var5)) { _fun0003_ip = 1805; continue _fun0003 }
 1777:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 42;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.TextIcon;
            _fun0003_ip = 1831; continue _fun0003;
 1805:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 41;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var5 = var6.TextControllerIcon;
 1831:
            var4 = var5;
 1834:
            var2 = var4;
 1837:
            _fun0003_ip = 1865; continue _fun0003;
 1839:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 38;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var2 = var4.BookCheckIcon;
 1865:
            return var2;
 1867:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 37;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.FolderIcon;
            return var2;
 1895:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 36;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadIcon;
            return var2;
 1923:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 35;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadLockIcon;
            return var2;
 1951:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 34;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.ChatIcon;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ChannelTypes;
    var _closure1_slot6 = var7;
    var7 = 61;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/native/ChannelUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getThreadChannelIcon'] = var6;
    var6 = function getSimpleChannelIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot7;
            var1 = var2.type;
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var5 = null;
            if(!(var5 == var1)) { _fun0004_ip = 439; continue _fun0004 }
 31:
            var7 = var2.type;
            var6 = _closure1_slot6;
            var6 = var6.PRIVATE_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 423; continue _fun0004 }
 53:
            var6 = _closure1_slot6;
            var6 = var6.ANNOUNCEMENT_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 423; continue _fun0004 }
 70:
            var6 = _closure1_slot6;
            var6 = var6.PUBLIC_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 423; continue _fun0004 }
 87:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_CATEGORY;
            if(!(var6 !== var7)) { _fun0004_ip = 401; continue _fun0004 }
 104:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_TEXT;
            if(!(var6 !== var7)) { _fun0004_ip = 379; continue _fun0004 }
 121:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_FORUM;
            if(!(var6 !== var7)) { _fun0004_ip = 379; continue _fun0004 }
 138:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_MEDIA;
            if(!(var6 !== var7)) { _fun0004_ip = 379; continue _fun0004 }
 155:
            var6 = _closure1_slot6;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var7)) { _fun0004_ip = 357; continue _fun0004 }
 172:
            var6 = _closure1_slot6;
            var6 = var6.DM;
            if(!(var6 !== var7)) { _fun0004_ip = 335; continue _fun0004 }
 189:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var7)) { _fun0004_ip = 313; continue _fun0004 }
 203:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var7)) { _fun0004_ip = 291; continue _fun0004 }
 217:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var7)) { _fun0004_ip = 269; continue _fun0004 }
 231:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_DIRECTORY;
            if(!(var6 !== var7)) { _fun0004_ip = 247; continue _fun0004 }
 245:
            return var5;
 247:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 13;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 269:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 12;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 291:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 313:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 335:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 357:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 8;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 379:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 401:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
 423:
            var3 = _closure1_slot7;
            var2 = var2.type;
            var2 = var3.bind(var4)(var2);
            return var2;
 439:
            return var1;
        }
    };
    var3['getSimpleChannelIcon'] = var6;
    var6 = function getChannelIconWithGuild(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var3 = _closure1_slot8;
            var2 = {};
            var1 = null;
            var7 = var1 == var5;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0005_ip = 34; continue _fun0005 }
 28:
            var6 = var5.rulesChannelId;
 34:
            var5 = var4.id;
            var5 = var6 === var5;
            var2['isRulesChannel'] = var5;
            var1 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['getChannelIconWithGuild'] = var6;
    var6 = function getChannelMentionIcon(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = 'voice';
            if(!(var1 !== var2)) { _fun0006_ip = 362; continue _fun0006 }
 14:
            var1 = 'voice-locked';
            if(!(var1 !== var2)) { _fun0006_ip = 335; continue _fun0006 }
 27:
            var1 = 'stage';
            if(!(var1 !== var2)) { _fun0006_ip = 308; continue _fun0006 }
 38:
            var1 = 'stage-locked';
            if(!(var1 !== var2)) { _fun0006_ip = 281; continue _fun0006 }
 51:
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0006_ip = 254; continue _fun0006 }
 62:
            var1 = 'thread';
            if(!(var1 !== var2)) { _fun0006_ip = 227; continue _fun0006 }
 73:
            var1 = 'post';
            if(!(var1 !== var2)) { _fun0006_ip = 200; continue _fun0006 }
 81:
            var1 = 'message';
            if(!(var1 !== var2)) { _fun0006_ip = 200; continue _fun0006 }
 89:
            var1 = 'forum';
            if(!(var1 !== var2)) { _fun0006_ip = 173; continue _fun0006 }
 99:
            var1 = 'media';
            if(!(var1 !== var2)) { _fun0006_ip = 146; continue _fun0006 }
 107:
            var1 = 'locked';
            if(!(var1 !== var2)) { _fun0006_ip = 119; continue _fun0006 }
 115:
            var1 = null;
            return var1;
 119:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 146:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 173:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 200:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 227:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 254:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 281:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 308:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 335:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 362:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['getChannelMentionIcon'] = var6;
    var3['getChannelIcon'] = var5;
    var5 = function getChannelIconComponentWithGuild(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var3 = _closure1_slot9;
            var2 = {};
            var1 = null;
            var7 = var1 == var5;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0007_ip = 34; continue _fun0007 }
 28:
            var6 = var5.rulesChannelId;
 34:
            var5 = var4.id;
            var5 = var6 === var5;
            var2['isRulesChannel'] = var5;
            var1 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['getChannelIconComponentWithGuild'] = var5;
    var3['getChannelIconComponent'] = var4;
    var2 = function getSimpleChannelIconComponent(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot6;
            var1 = var1.PRIVATE_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 527; continue _fun0008 }
 28:
            var1 = _closure1_slot6;
            var1 = var1.ANNOUNCEMENT_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 527; continue _fun0008 }
 45:
            var1 = _closure1_slot6;
            var1 = var1.PUBLIC_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 527; continue _fun0008 }
 62:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_CATEGORY;
            if(!(var1 !== var4)) { _fun0008_ip = 497; continue _fun0008 }
 79:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_TEXT;
            if(!(var1 !== var4)) { _fun0008_ip = 467; continue _fun0008 }
 96:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_FORUM;
            if(!(var1 !== var4)) { _fun0008_ip = 437; continue _fun0008 }
 113:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_MEDIA;
            if(!(var1 !== var4)) { _fun0008_ip = 407; continue _fun0008 }
 130:
            var1 = _closure1_slot6;
            var1 = var1.GROUP_DM;
            if(!(var1 !== var4)) { _fun0008_ip = 377; continue _fun0008 }
 147:
            var1 = _closure1_slot6;
            var1 = var1.DM;
            if(!(var1 !== var4)) { _fun0008_ip = 347; continue _fun0008 }
 164:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_ANNOUNCEMENT;
            if(!(var1 !== var4)) { _fun0008_ip = 317; continue _fun0008 }
 181:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var1 !== var4)) { _fun0008_ip = 287; continue _fun0008 }
 195:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_VOICE;
            if(!(var1 !== var4)) { _fun0008_ip = 257; continue _fun0008 }
 209:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_DIRECTORY;
            if(!(var1 !== var4)) { _fun0008_ip = 227; continue _fun0008 }
 223:
            var1 = null;
            return var1;
 227:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 60;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.HubIcon;
            return var1;
 257:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 59;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.VoiceNormalIcon;
            return var1;
 287:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 56;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.StageIcon;
            return var1;
 317:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 53;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AnnouncementsIcon;
            return var1;
 347:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 50;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AtIcon;
            return var1;
 377:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 49;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.GroupIcon;
            return var1;
 407:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 47;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ImageIcon;
            return var1;
 437:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 48;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ForumIcon;
            return var1;
 467:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 42;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.TextIcon;
            return var1;
 497:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 37;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.FolderIcon;
            return var1;
 527:
            var1 = var3.isForumPost;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var1) { _fun0008_ip = 570; continue _fun0008 }
 548:
            var1 = 36;
            var2 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var1 = var1.ThreadIcon;
            _fun0008_ip = 590; continue _fun0008;
 570:
            var2 = 34;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1 = var2.ChatIcon;
 590:
            return var1;
        }
    };
    var3['getSimpleChannelIconComponent'] = var2;
    return var1;
})();