// app/modules/activity_status/getActivityStatusText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot3 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/getActivityStatusText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityStatusText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var7 = arguments[1];
            var3 = undefined;
            if(!(var7 === var3)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var7 = false;
 14:
            var4 = null;
            var2 = var4 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 30; continue _fun0001 }
 25:
            var1 = var5.name;
 30:
            var6 = '';
            var2 = null;
            if(!(var6 !== var1)) { _fun0001_ip = 57; continue _fun0001 }
 40:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 54; continue _fun0001 }
 49:
            var1 = var5.name;
 54:
            var2 = var1;
 57:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var1 = var5.details;
 72:
            var14 = null;
            if(!(var6 !== var1)) { _fun0001_ip = 96; continue _fun0001 }
 78:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 93; continue _fun0001 }
 87:
            var1 = var5.details;
 93:
            var14 = var1;
 96:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var1 = var5.state;
 110:
            var8 = null;
            if(!(var6 !== var1)) { _fun0001_ip = 133; continue _fun0001 }
 116:
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 130; continue _fun0001 }
 125:
            var1 = var5.state;
 130:
            var8 = var1;
 133:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 1;
            var6 = var10[var6];
            var10 = var9.bind(var3)(var6);
            var9 = var10.getIsActivityStatusNoVerbEnabled;
            var6 = 'getActivityStatusText';
            var6 = var9.bind(var10)(var6);
            var9 = var4 == var5;
            var10 = undefined;
            if(var9) { _fun0001_ip = 187; continue _fun0001 }
 182:
            var10 = var5.type;
 187:
            var9 = _closure1_slot3;
            var9 = var9.STREAMING;
            var11 = var2;
            if(!(var10 === var9)) { _fun0001_ip = 214; continue _fun0001 }
 204:
            var11 = var2;
            if(!(var4 != var14)) { _fun0001_ip = 214; continue _fun0001 }
 211:
            var11 = var14;
 214:
            var9 = var4 == var5;
            var10 = undefined;
            if(var9) { _fun0001_ip = 229; continue _fun0001 }
 223:
            var10 = var5.status_display_type;
 229:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = 2;
            var9 = var9[var15];
            var9 = var12.bind(var3)(var9);
            var9 = var9.StatusDisplayTypes;
            var9 = var9.NAME;
            if(!(var10 === var9)) { _fun0001_ip = 272; continue _fun0001 }
 265:
            var9 = var2;
            if(!(var4 == var2)) { _fun0001_ip = 391; continue _fun0001 }
 272:
            var10 = var4 == var5;
            var12 = undefined;
            if(var10) { _fun0001_ip = 287; continue _fun0001 }
 281:
            var12 = var5.status_display_type;
 287:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var10 = var13.bind(var3)(var10);
            var10 = var10.StatusDisplayTypes;
            var10 = var10.STATE;
            if(!(var12 === var10)) { _fun0001_ip = 327; continue _fun0001 }
 320:
            var9 = var8;
            if(!(var4 == var9)) { _fun0001_ip = 391; continue _fun0001 }
 327:
            var10 = var4 == var5;
            var12 = undefined;
            if(var10) { _fun0001_ip = 342; continue _fun0001 }
 336:
            var12 = var5.status_display_type;
 342:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var10 = var13.bind(var3)(var10);
            var10 = var10.StatusDisplayTypes;
            var10 = var10.DETAILS;
            var10 = var12 === var10;
            if(!var10) { _fun0001_ip = 382; continue _fun0001 }
 378:
            var10 = var4 != var14;
 382:
            var9 = var11;
            if(!var10) { _fun0001_ip = 391; continue _fun0001 }
 388:
            var9 = var14;
 391:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 3;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.bind(var3)(var5);
            if(var10) { _fun0001_ip = 1936; continue _fun0001 }
 422:
            var10 = var4 == var5;
            var11 = undefined;
            if(var10) { _fun0001_ip = 436; continue _fun0001 }
 431:
            var11 = var5.type;
 436:
            var10 = _closure1_slot3;
            var10 = var10.PLAYING;
            if(!(var11 === var10)) { _fun0001_ip = 457; continue _fun0001 }
 450:
            if(!(var4 == var9)) { _fun0001_ip = 1791; continue _fun0001 }
 457:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 6;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.bind(var3)(var5);
            if(!var10) { _fun0001_ip = 495; continue _fun0001 }
 485:
            if(!var7) { _fun0001_ip = 495; continue _fun0001 }
 488:
            if(!(var4 == var8)) { _fun0001_ip = 1609; continue _fun0001 }
 495:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 7;
            var10 = var12[var10];
            var11 = var11.bind(var3)(var10);
            var10 = var11.isStageActivity;
            var10 = var10.bind(var11)(var5);
            if(!var10) { _fun0001_ip = 536; continue _fun0001 }
 529:
            if(!(var4 == var2)) { _fun0001_ip = 1463; continue _fun0001 }
 536:
            var10 = var4 == var5;
            var11 = undefined;
            if(var10) { _fun0001_ip = 550; continue _fun0001 }
 545:
            var11 = var5.type;
 550:
            var10 = _closure1_slot3;
            var10 = var10.LISTENING;
            if(!(var11 === var10)) { _fun0001_ip = 571; continue _fun0001 }
 564:
            if(!(var4 == var9)) { _fun0001_ip = 1314; continue _fun0001 }
 571:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 8;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.bind(var3)(var5);
            if(!var10) { _fun0001_ip = 609; continue _fun0001 }
 599:
            if(!var7) { _fun0001_ip = 609; continue _fun0001 }
 602:
            if(!(var4 == var14)) { _fun0001_ip = 1165; continue _fun0001 }
 609:
            var7 = var4 == var5;
            var10 = undefined;
            if(var7) { _fun0001_ip = 623; continue _fun0001 }
 618:
            var10 = var5.type;
 623:
            var7 = _closure1_slot3;
            var7 = var7.WATCHING;
            if(!(var10 === var7)) { _fun0001_ip = 644; continue _fun0001 }
 637:
            if(!(var4 == var9)) { _fun0001_ip = 1016; continue _fun0001 }
 644:
            var7 = var4 == var5;
            var10 = undefined;
            if(var7) { _fun0001_ip = 658; continue _fun0001 }
 653:
            var10 = var5.type;
 658:
            var7 = _closure1_slot3;
            var7 = var7.COMPETING;
            if(!(var10 === var7)) { _fun0001_ip = 679; continue _fun0001 }
 672:
            if(!(var4 == var9)) { _fun0001_ip = 867; continue _fun0001 }
 679:
            var10 = var4 == var5;
            var7 = undefined;
            if(var10) { _fun0001_ip = 693; continue _fun0001 }
 688:
            var7 = var5.type;
 693:
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var7 === var5)) { _fun0001_ip = 711; continue _fun0001 }
 707:
            if(!(var4 == var9)) { _fun0001_ip = 718; continue _fun0001 }
 711:
            var5 = {};
            _fun0001_ip = 862; continue _fun0001;
 718:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 788; continue _fun0001 }
 726:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.0wJXSk;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var15)(var12, var11);
 788:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.0wJXSk;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
 862:
            _fun0001_ip = 1011; continue _fun0001;
 867:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 937; continue _fun0001 }
 875:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.QQ2wVF;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var15)(var12, var11);
 937:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.QQ2wVF;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
 1011:
            _fun0001_ip = 1160; continue _fun0001;
 1016:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 1086; continue _fun0001 }
 1024:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var15)(var12, var11);
 1086:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.pW3Ip6;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
 1160:
            _fun0001_ip = 1309; continue _fun0001;
 1165:
            var7 = {};
            var10 = var14;
            if(var6) { _fun0001_ip = 1235; continue _fun0001 }
 1173:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var14;
            var10 = var13.bind(var15)(var12, var11);
 1235:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.pW3Ip6;
            var10 = {};
            var10['name'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
 1309:
            _fun0001_ip = 1458; continue _fun0001;
 1314:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 1384; continue _fun0001 }
 1322:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 5;
            var13 = var15[var11];
            var13 = var12.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var15[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.Vnuxub;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var14)(var12, var11);
 1384:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 5;
            var12 = var14[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var14[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.Vnuxub;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
 1458:
            _fun0001_ip = 1607; continue _fun0001;
 1463:
            var7 = {};
            var10 = var2;
            if(var6) { _fun0001_ip = 1533; continue _fun0001 }
 1471:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 5;
            var13 = var15[var11];
            var13 = var12.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var15[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var2;
            var10 = var13.bind(var14)(var12, var11);
 1533:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 5;
            var12 = var14[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var14[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.pW3Ip6;
            var10 = {};
            var10['name'] = var2;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
 1607:
            return var5;
 1609:
            var7 = var8.split;
            var5 = ';';
            var7 = var7.bind(var8)(var5);
            var4 = var4 == var7;
            var11 = undefined;
            if(var4) { _fun0001_ip = 1648; continue _fun0001 }
 1632:
            var5 = var7.join;
            var4 = ', ';
            var11 = var5.bind(var7)(var4);
 1648:
            var4 = {};
            var5 = var11;
            if(var6) { _fun0001_ip = 1718; continue _fun0001 }
 1656:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 5;
            var10 = var13[var7];
            var10 = var8.bind(var3)(var10);
            var12 = var10.intl;
            var10 = var12.format;
            var7 = var13[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.t;
            var8 = var7.Vnuxub;
            var7 = {};
            var7['name'] = var11;
            var5 = var10.bind(var12)(var8, var7);
 1718:
            var4['text'] = var5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 5;
            var8 = var12[var5];
            var8 = var7.bind(var3)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var5 = var12[var5];
            var5 = var7.bind(var3)(var5);
            var5 = var5.t;
            var7 = var5.Vnuxub;
            var5 = {};
            var5['name'] = var11;
            var5 = var8.bind(var10)(var7, var5);
            var4['tooltip'] = var5;
            return var4;
 1791:
            var4 = {};
            var5 = var9;
            if(var6) { _fun0001_ip = 1862; continue _fun0001 }
 1799:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 5;
            var8 = var11[var6];
            var8 = var7.bind(var3)(var8);
            var10 = var8.intl;
            var8 = var10.format;
            var6 = var11[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.lFApm5;
            var6 = {};
            var6['game'] = var9;
            var5 = var8.bind(var10)(var7, var6);
 1862:
            var4['text'] = var5;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 5;
            var7 = var10[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.lFApm5;
            var5 = {};
            var5['game'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var4['tooltip'] = var5;
            return var4;
 1936:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var2 = var1.bind(var3)(var2);
            var1 = {};
            var1['text'] = var2;
            var1['tooltip'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();