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
            if(var2) { _fun0002_ip = 1673; continue _fun0002 }
 121:
            var5 = _closure1_slot7;
            var2 = var4.type;
            var2 = var5.bind(var3)(var2);
            if(!(var8 == var2)) { _fun0002_ip = 1671; continue _fun0002 }
 142:
            var5 = var4.isMediaChannel;
            var11 = var5.bind(var4)();
            var5 = var4.isNSFW;
            var5 = var5.bind(var4)();
            var14 = var4.type;
            var13 = _closure1_slot6;
            var13 = var13.PRIVATE_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 1655; continue _fun0002 }
 184:
            var13 = _closure1_slot6;
            var13 = var13.ANNOUNCEMENT_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 1655; continue _fun0002 }
 201:
            var13 = _closure1_slot6;
            var13 = var13.PUBLIC_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 1655; continue _fun0002 }
 218:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_CATEGORY;
            if(!(var13 !== var14)) { _fun0002_ip = 1633; continue _fun0002 }
 235:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_TEXT;
            if(!(var13 !== var14)) { _fun0002_ip = 1444; continue _fun0002 }
 252:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_FORUM;
            if(!(var13 !== var14)) { _fun0002_ip = 1254; continue _fun0002 }
 269:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_MEDIA;
            if(!(var13 !== var14)) { _fun0002_ip = 1100; continue _fun0002 }
 286:
            var13 = _closure1_slot6;
            var13 = var13.GROUP_DM;
            if(!(var13 !== var14)) { _fun0002_ip = 1078; continue _fun0002 }
 303:
            var13 = _closure1_slot6;
            var13 = var13.DM;
            if(!(var13 !== var14)) { _fun0002_ip = 1056; continue _fun0002 }
 320:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_ANNOUNCEMENT;
            if(!(var13 !== var14)) { _fun0002_ip = 902; continue _fun0002 }
 337:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var13 !== var14)) { _fun0002_ip = 690; continue _fun0002 }
 354:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_VOICE;
            if(!(var13 !== var14)) { _fun0002_ip = 406; continue _fun0002 }
 368:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_DIRECTORY;
            if(!(var13 !== var14)) { _fun0002_ip = 384; continue _fun0002 }
 382:
            return var8;
 384:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 13;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            return var13;
 406:
            if(var12) { _fun0002_ip = 668; continue _fun0002 }
 412:
            if(!var9) { _fun0002_ip = 495; continue _fun0002 }
 415:
            if(!(var8 != var6)) { _fun0002_ip = 428; continue _fun0002 }
 419:
            var12 = var6.ignoreTraits;
            if(var12) { _fun0002_ip = 495; continue _fun0002 }
 428:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 23;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.bind(var3)(var4);
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var12) { _fun0002_ip = 478; continue _fun0002 }
 464:
            var12 = 14;
            var12 = var15[var12];
            var12 = var14.bind(var3)(var12);
            _fun0002_ip = 490; continue _fun0002;
 478:
            var13 = 31;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
 490:
            _fun0002_ip = 666; continue _fun0002;
 495:
            if(!var10) { _fun0002_ip = 536; continue _fun0002 }
 498:
            if(!(var8 != var6)) { _fun0002_ip = 511; continue _fun0002 }
 502:
            var13 = var6.ignoreTraits;
            if(var13) { _fun0002_ip = 536; continue _fun0002 }
 511:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 31;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            _fun0002_ip = 663; continue _fun0002;
 536:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 23;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.bind(var3)(var4);
            if(!var14) { _fun0002_ip = 599; continue _fun0002 }
 564:
            if(!(var8 != var6)) { _fun0002_ip = 577; continue _fun0002 }
 568:
            var14 = var6.ignoreTraits;
            if(var14) { _fun0002_ip = 599; continue _fun0002 }
 577:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 14;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            _fun0002_ip = 660; continue _fun0002;
 599:
            if(!var5) { _fun0002_ip = 637; continue _fun0002 }
 602:
            if(!(var8 != var6)) { _fun0002_ip = 615; continue _fun0002 }
 606:
            var15 = var6.ignoreTraits;
            if(var15) { _fun0002_ip = 637; continue _fun0002 }
 615:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 32;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            _fun0002_ip = 657; continue _fun0002;
 637:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 12;
            var16 = var18[var16];
            var15 = var17.bind(var3)(var16);
 657:
            var14 = var15;
 660:
            var13 = var14;
 663:
            var12 = var13;
 666:
            _fun0002_ip = 688; continue _fun0002;
 668:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 16;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
 688:
            return var12;
 690:
            if(!var9) { _fun0002_ip = 773; continue _fun0002 }
 693:
            if(!(var8 != var6)) { _fun0002_ip = 706; continue _fun0002 }
 697:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 773; continue _fun0002 }
 706:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 23;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.bind(var3)(var4);
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var9) { _fun0002_ip = 756; continue _fun0002 }
 742:
            var9 = 15;
            var9 = var14[var9];
            var9 = var13.bind(var3)(var9);
            _fun0002_ip = 768; continue _fun0002;
 756:
            var12 = 31;
            var12 = var14[var12];
            var9 = var13.bind(var3)(var12);
 768:
            _fun0002_ip = 900; continue _fun0002;
 773:
            if(!var10) { _fun0002_ip = 811; continue _fun0002 }
 776:
            if(!(var8 != var6)) { _fun0002_ip = 789; continue _fun0002 }
 780:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 811; continue _fun0002 }
 789:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 897; continue _fun0002;
 811:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 23;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.bind(var3)(var4);
            if(!var12) { _fun0002_ip = 874; continue _fun0002 }
 839:
            if(!(var8 != var6)) { _fun0002_ip = 852; continue _fun0002 }
 843:
            var12 = var6.ignoreTraits;
            if(var12) { _fun0002_ip = 874; continue _fun0002 }
 852:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 15;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            _fun0002_ip = 894; continue _fun0002;
 874:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 11;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
 894:
            var10 = var12;
 897:
            var9 = var10;
 900:
            return var9;
 902:
            if(var7) { _fun0002_ip = 1034; continue _fun0002 }
 908:
            if(!var5) { _fun0002_ip = 946; continue _fun0002 }
 911:
            if(!(var8 != var6)) { _fun0002_ip = 924; continue _fun0002 }
 915:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 946; continue _fun0002 }
 924:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 29;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 1032; continue _fun0002;
 946:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 23;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 1009; continue _fun0002 }
 974:
            if(!(var8 != var6)) { _fun0002_ip = 987; continue _fun0002 }
 978:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 1009; continue _fun0002 }
 987:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 30;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 1029; continue _fun0002;
 1009:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 10;
            var12 = var14[var12];
            var10 = var13.bind(var3)(var12);
 1029:
            var9 = var10;
 1032:
            _fun0002_ip = 1054; continue _fun0002;
 1034:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 21;
            var10 = var13[var10];
            var9 = var12.bind(var3)(var10);
 1054:
            return var9;
 1056:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 9;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            return var9;
 1078:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 8;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            return var9;
 1100:
            if(var7) { _fun0002_ip = 1232; continue _fun0002 }
 1106:
            if(!var5) { _fun0002_ip = 1144; continue _fun0002 }
 1109:
            if(!(var8 != var6)) { _fun0002_ip = 1122; continue _fun0002 }
 1113:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 1144; continue _fun0002 }
 1122:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 25;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 1230; continue _fun0002;
 1144:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 23;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 1207; continue _fun0002 }
 1172:
            if(!(var8 != var6)) { _fun0002_ip = 1185; continue _fun0002 }
 1176:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 1207; continue _fun0002 }
 1185:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 27;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 1227; continue _fun0002;
 1207:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 18;
            var12 = var14[var12];
            var10 = var13.bind(var3)(var12);
 1227:
            var9 = var10;
 1230:
            _fun0002_ip = 1252; continue _fun0002;
 1232:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 21;
            var10 = var13[var10];
            var9 = var12.bind(var3)(var10);
 1252:
            return var9;
 1254:
            if(var7) { _fun0002_ip = 1422; continue _fun0002 }
 1260:
            if(!var5) { _fun0002_ip = 1310; continue _fun0002 }
 1263:
            if(!(var8 != var6)) { _fun0002_ip = 1276; continue _fun0002 }
 1267:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 1310; continue _fun0002 }
 1276:
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var11) { _fun0002_ip = 1296; continue _fun0002 }
 1287:
            var9 = 26;
            var9 = var13[var9];
            _fun0002_ip = 1303; continue _fun0002;
 1296:
            var12 = 25;
            var9 = var13[var12];
 1303:
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 1420; continue _fun0002;
 1310:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 23;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 1385; continue _fun0002 }
 1338:
            if(!(var8 != var6)) { _fun0002_ip = 1351; continue _fun0002 }
 1342:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 1385; continue _fun0002 }
 1351:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var11) { _fun0002_ip = 1371; continue _fun0002 }
 1362:
            var10 = 28;
            var10 = var14[var10];
            _fun0002_ip = 1378; continue _fun0002;
 1371:
            var13 = 27;
            var10 = var14[var13];
 1378:
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 1417; continue _fun0002;
 1385:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var11) { _fun0002_ip = 1405; continue _fun0002 }
 1396:
            var11 = 17;
            var11 = var14[var11];
            _fun0002_ip = 1412; continue _fun0002;
 1405:
            var13 = 18;
            var11 = var14[var13];
 1412:
            var10 = var12.bind(var3)(var11);
 1417:
            var9 = var10;
 1420:
            _fun0002_ip = 1442; continue _fun0002;
 1422:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 21;
            var10 = var12[var10];
            var9 = var11.bind(var3)(var10);
 1442:
            return var9;
 1444:
            if(var7) { _fun0002_ip = 1611; continue _fun0002 }
 1450:
            if(!var5) { _fun0002_ip = 1488; continue _fun0002 }
 1453:
            if(!(var8 != var6)) { _fun0002_ip = 1466; continue _fun0002 }
 1457:
            var5 = var6.ignoreTraits;
            if(var5) { _fun0002_ip = 1488; continue _fun0002 }
 1466:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 22;
            var5 = var9[var5];
            var5 = var7.bind(var3)(var5);
            _fun0002_ip = 1609; continue _fun0002;
 1488:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 23;
            var7 = var10[var7];
            var7 = var9.bind(var3)(var7);
            var7 = var7.bind(var3)(var4);
            if(!var7) { _fun0002_ip = 1551; continue _fun0002 }
 1516:
            if(!(var8 != var6)) { _fun0002_ip = 1529; continue _fun0002 }
 1520:
            var6 = var6.ignoreTraits;
            if(var6) { _fun0002_ip = 1551; continue _fun0002 }
 1529:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 19;
            var6 = var9[var6];
            var6 = var7.bind(var3)(var6);
            _fun0002_ip = 1606; continue _fun0002;
 1551:
            var7 = var4.linkedLobby;
            if(!(var8 == var7)) { _fun0002_ip = 1583; continue _fun0002 }
 1561:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            _fun0002_ip = 1603; continue _fun0002;
 1583:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 24;
            var8 = var10[var8];
            var7 = var9.bind(var3)(var8);
 1603:
            var6 = var7;
 1606:
            var5 = var6;
 1609:
            _fun0002_ip = 1631; continue _fun0002;
 1611:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var5 = var7.bind(var3)(var6);
 1631:
            return var5;
 1633:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            return var5;
 1655:
            var5 = _closure1_slot7;
            var4 = var4.type;
            var4 = var5.bind(var3)(var4);
            return var4;
 1671:
            return var2;
 1673:
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
            if(var2) { _fun0003_ip = 1930; continue _fun0003 }
 121:
            var2 = var5.isMediaChannel;
            var10 = var2.bind(var5)();
            var2 = var5.isNSFW;
            var2 = var2.bind(var5)();
            var13 = var5.type;
            var12 = _closure1_slot6;
            var12 = var12.PRIVATE_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 1902; continue _fun0003 }
 163:
            var12 = _closure1_slot6;
            var12 = var12.ANNOUNCEMENT_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 1874; continue _fun0003 }
 180:
            var12 = _closure1_slot6;
            var12 = var12.PUBLIC_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 1874; continue _fun0003 }
 197:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_CATEGORY;
            if(!(var12 !== var13)) { _fun0003_ip = 1846; continue _fun0003 }
 214:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_TEXT;
            if(!(var12 !== var13)) { _fun0003_ip = 1624; continue _fun0003 }
 231:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_FORUM;
            if(!(var12 !== var13)) { _fun0003_ip = 1371; continue _fun0003 }
 248:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_MEDIA;
            if(!(var12 !== var13)) { _fun0003_ip = 1193; continue _fun0003 }
 265:
            var12 = _closure1_slot6;
            var12 = var12.GROUP_DM;
            if(!(var12 !== var13)) { _fun0003_ip = 1165; continue _fun0003 }
 282:
            var12 = _closure1_slot6;
            var12 = var12.DM;
            if(!(var12 !== var13)) { _fun0003_ip = 1137; continue _fun0003 }
 299:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_ANNOUNCEMENT;
            if(!(var12 !== var13)) { _fun0003_ip = 959; continue _fun0003 }
 316:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 717; continue _fun0003 }
 333:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 391; continue _fun0003 }
 347:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_DIRECTORY;
            if(!(var12 !== var13)) { _fun0003_ip = 363; continue _fun0003 }
 361:
            return var3;
 363:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 59;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.HubIcon;
            return var12;
 391:
            if(var11) { _fun0003_ip = 689; continue _fun0003 }
 397:
            if(!var8) { _fun0003_ip = 492; continue _fun0003 }
 400:
            if(!(var6 != var4)) { _fun0003_ip = 413; continue _fun0003 }
 404:
            var11 = var4.ignoreTraits;
            if(var11) { _fun0003_ip = 492; continue _fun0003 }
 413:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 23;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.bind(var3)(var5);
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var11) { _fun0003_ip = 469; continue _fun0003 }
 449:
            var11 = 56;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.VoiceLockIcon;
            _fun0003_ip = 487; continue _fun0003;
 469:
            var12 = 53;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.LockIcon;
 487:
            _fun0003_ip = 687; continue _fun0003;
 492:
            if(!var9) { _fun0003_ip = 539; continue _fun0003 }
 495:
            if(!(var6 != var4)) { _fun0003_ip = 508; continue _fun0003 }
 499:
            var12 = var4.ignoreTraits;
            if(var12) { _fun0003_ip = 539; continue _fun0003 }
 508:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 53;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.LockIcon;
            _fun0003_ip = 684; continue _fun0003;
 539:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 23;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.bind(var3)(var5);
            if(!var13) { _fun0003_ip = 608; continue _fun0003 }
 567:
            if(!(var6 != var4)) { _fun0003_ip = 580; continue _fun0003 }
 571:
            var13 = var4.ignoreTraits;
            if(var13) { _fun0003_ip = 608; continue _fun0003 }
 580:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 56;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.VoiceLockIcon;
            _fun0003_ip = 681; continue _fun0003;
 608:
            if(!var2) { _fun0003_ip = 652; continue _fun0003 }
 611:
            if(!(var6 != var4)) { _fun0003_ip = 624; continue _fun0003 }
 615:
            var14 = var4.ignoreTraits;
            if(var14) { _fun0003_ip = 652; continue _fun0003 }
 624:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 57;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.VoiceWarningIcon;
            _fun0003_ip = 678; continue _fun0003;
 652:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 58;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            var14 = var15.VoiceNormalIcon;
 678:
            var13 = var14;
 681:
            var12 = var13;
 684:
            var11 = var12;
 687:
            _fun0003_ip = 715; continue _fun0003;
 689:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 33;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.ChatIcon;
 715:
            return var11;
 717:
            if(!var8) { _fun0003_ip = 812; continue _fun0003 }
 720:
            if(!(var6 != var4)) { _fun0003_ip = 733; continue _fun0003 }
 724:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 812; continue _fun0003 }
 733:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 23;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var8) { _fun0003_ip = 789; continue _fun0003 }
 769:
            var8 = 54;
            var8 = var13[var8];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StageLockIcon;
            _fun0003_ip = 807; continue _fun0003;
 789:
            var11 = 53;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var8 = var11.LockIcon;
 807:
            _fun0003_ip = 957; continue _fun0003;
 812:
            if(!var9) { _fun0003_ip = 856; continue _fun0003 }
 815:
            if(!(var6 != var4)) { _fun0003_ip = 828; continue _fun0003 }
 819:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 856; continue _fun0003 }
 828:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 53;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.LockIcon;
            _fun0003_ip = 954; continue _fun0003;
 856:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 23;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.bind(var3)(var5);
            if(!var11) { _fun0003_ip = 925; continue _fun0003 }
 884:
            if(!(var6 != var4)) { _fun0003_ip = 897; continue _fun0003 }
 888:
            var11 = var4.ignoreTraits;
            if(var11) { _fun0003_ip = 925; continue _fun0003 }
 897:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 54;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.StageLockIcon;
            _fun0003_ip = 951; continue _fun0003;
 925:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 55;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.StageIcon;
 951:
            var9 = var11;
 954:
            var8 = var9;
 957:
            return var8;
 959:
            if(var7) { _fun0003_ip = 1109; continue _fun0003 }
 965:
            if(!var2) { _fun0003_ip = 1009; continue _fun0003 }
 968:
            if(!(var6 != var4)) { _fun0003_ip = 981; continue _fun0003 }
 972:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 1009; continue _fun0003 }
 981:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 50;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AnnouncementsWarningIcon;
            _fun0003_ip = 1107; continue _fun0003;
 1009:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 23;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 1078; continue _fun0003 }
 1037:
            if(!(var6 != var4)) { _fun0003_ip = 1050; continue _fun0003 }
 1041:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 1078; continue _fun0003 }
 1050:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 51;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.AnnouncementsLockIcon;
            _fun0003_ip = 1104; continue _fun0003;
 1078:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 52;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.AnnouncementsIcon;
 1104:
            var8 = var9;
 1107:
            _fun0003_ip = 1135; continue _fun0003;
 1109:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 37;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
 1135:
            return var8;
 1137:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 49;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AtIcon;
            return var8;
 1165:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 48;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.GroupIcon;
            return var8;
 1193:
            if(var7) { _fun0003_ip = 1343; continue _fun0003 }
 1199:
            if(!var2) { _fun0003_ip = 1243; continue _fun0003 }
 1202:
            if(!(var6 != var4)) { _fun0003_ip = 1215; continue _fun0003 }
 1206:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 1243; continue _fun0003 }
 1215:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 42;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.ImageWarningIcon;
            _fun0003_ip = 1341; continue _fun0003;
 1243:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 23;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 1312; continue _fun0003 }
 1271:
            if(!(var6 != var4)) { _fun0003_ip = 1284; continue _fun0003 }
 1275:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 1312; continue _fun0003 }
 1284:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 44;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.ImageLockIcon;
            _fun0003_ip = 1338; continue _fun0003;
 1312:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 46;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.ImageIcon;
 1338:
            var8 = var9;
 1341:
            _fun0003_ip = 1369; continue _fun0003;
 1343:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 37;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
 1369:
            return var8;
 1371:
            if(var7) { _fun0003_ip = 1596; continue _fun0003 }
 1377:
            if(!var2) { _fun0003_ip = 1447; continue _fun0003 }
 1380:
            if(!(var6 != var4)) { _fun0003_ip = 1393; continue _fun0003 }
 1384:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 1447; continue _fun0003 }
 1393:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var10) { _fun0003_ip = 1424; continue _fun0003 }
 1404:
            var8 = 43;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.ForumWarningIcon;
            _fun0003_ip = 1442; continue _fun0003;
 1424:
            var9 = 42;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.ImageWarningIcon;
 1442:
            _fun0003_ip = 1594; continue _fun0003;
 1447:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 23;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 1539; continue _fun0003 }
 1475:
            if(!(var6 != var4)) { _fun0003_ip = 1488; continue _fun0003 }
 1479:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 1539; continue _fun0003 }
 1488:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var10) { _fun0003_ip = 1519; continue _fun0003 }
 1499:
            var9 = 45;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.ForumLockIcon;
            _fun0003_ip = 1537; continue _fun0003;
 1519:
            var11 = 44;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.ImageLockIcon;
 1537:
            _fun0003_ip = 1591; continue _fun0003;
 1539:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var10) { _fun0003_ip = 1570; continue _fun0003 }
 1550:
            var10 = 47;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.ForumIcon;
            _fun0003_ip = 1588; continue _fun0003;
 1570:
            var11 = 46;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var10 = var11.ImageIcon;
 1588:
            var9 = var10;
 1591:
            var8 = var9;
 1594:
            _fun0003_ip = 1622; continue _fun0003;
 1596:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 37;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
 1622:
            return var8;
 1624:
            if(var7) { _fun0003_ip = 1818; continue _fun0003 }
 1630:
            if(!var2) { _fun0003_ip = 1677; continue _fun0003 }
 1633:
            if(!(var6 != var4)) { _fun0003_ip = 1646; continue _fun0003 }
 1637:
            var2 = var4.ignoreTraits;
            if(var2) { _fun0003_ip = 1677; continue _fun0003 }
 1646:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 38;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.TextWarningIcon;
            _fun0003_ip = 1816; continue _fun0003;
 1677:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 23;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.bind(var3)(var5);
            if(!var7) { _fun0003_ip = 1746; continue _fun0003 }
 1705:
            if(!(var6 != var4)) { _fun0003_ip = 1718; continue _fun0003 }
 1709:
            var4 = var4.ignoreTraits;
            if(var4) { _fun0003_ip = 1746; continue _fun0003 }
 1718:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 39;
            var4 = var8[var4];
            var4 = var7.bind(var3)(var4);
            var4 = var4.TextLockIcon;
            _fun0003_ip = 1813; continue _fun0003;
 1746:
            var5 = var5.linkedLobby;
            if(!(var6 == var5)) { _fun0003_ip = 1784; continue _fun0003 }
 1756:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 41;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.TextIcon;
            _fun0003_ip = 1810; continue _fun0003;
 1784:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 40;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var5 = var6.TextControllerIcon;
 1810:
            var4 = var5;
 1813:
            var2 = var4;
 1816:
            _fun0003_ip = 1844; continue _fun0003;
 1818:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 37;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var2 = var4.BookCheckIcon;
 1844:
            return var2;
 1846:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 36;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.FolderIcon;
            return var2;
 1874:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 35;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadIcon;
            return var2;
 1902:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 34;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadLockIcon;
            return var2;
 1930:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 33;
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
    var7 = 60;
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
            var1 = 59;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.HubIcon;
            return var1;
 257:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 58;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.VoiceNormalIcon;
            return var1;
 287:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 55;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.StageIcon;
            return var1;
 317:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 52;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AnnouncementsIcon;
            return var1;
 347:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 49;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AtIcon;
            return var1;
 377:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 48;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.GroupIcon;
            return var1;
 407:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 46;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ImageIcon;
            return var1;
 437:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 47;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ForumIcon;
            return var1;
 467:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 41;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.TextIcon;
            return var1;
 497:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 36;
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
            var1 = 35;
            var2 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var1 = var1.ThreadIcon;
            _fun0008_ip = 590; continue _fun0008;
 570:
            var2 = 33;
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