// app/modules/activity_status/getActivityStatusText.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/getActivityStatusText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityStatusText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var6 = arguments[1];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var6 = false;
 14:
            var4 = null;
            var2 = var4 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 30; continue _fun0001 }
 25:
            var1 = var5.name;
 30:
            var8 = '';
            var2 = null;
            if(!(var8 !== var1)) { _fun0001_ip = 57; continue _fun0001 }
 40:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 54; continue _fun0001 }
 49:
            var1 = var5.name;
 54:
            var2 = var1;
 57:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var1 = var5.details;
 72:
            var13 = null;
            if(!(var8 !== var1)) { _fun0001_ip = 96; continue _fun0001 }
 78:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 93; continue _fun0001 }
 87:
            var1 = var5.details;
 93:
            var13 = var1;
 96:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var1 = var5.state;
 110:
            var7 = null;
            if(!(var8 !== var1)) { _fun0001_ip = 133; continue _fun0001 }
 116:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 130; continue _fun0001 }
 125:
            var1 = var5.state;
 130:
            var7 = var1;
 133:
            var1 = var4 == var5;
            var9 = undefined;
            if(var1) { _fun0001_ip = 147; continue _fun0001 }
 142:
            var9 = var5.type;
 147:
            var8 = _closure1_slot3;
            var8 = var8.STREAMING;
            var10 = var2;
            if(!(var9 === var8)) { _fun0001_ip = 177; continue _fun0001 }
 167:
            var10 = var2;
            if(!(var4 != var13)) { _fun0001_ip = 177; continue _fun0001 }
 174:
            var10 = var13;
 177:
            var8 = var4 == var5;
            var9 = undefined;
            if(var8) { _fun0001_ip = 192; continue _fun0001 }
 186:
            var9 = var5.status_display_type;
 192:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var14 = 1;
            var8 = var8[var14];
            var8 = var11.bind(var3)(var8);
            var8 = var8.StatusDisplayTypes;
            var8 = var8.NAME;
            if(!(var9 === var8)) { _fun0001_ip = 235; continue _fun0001 }
 228:
            var9 = var2;
            if(!(var4 == var9)) { _fun0001_ip = 354; continue _fun0001 }
 235:
            var8 = var4 == var5;
            var11 = undefined;
            if(var8) { _fun0001_ip = 250; continue _fun0001 }
 244:
            var11 = var5.status_display_type;
 250:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var14];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StatusDisplayTypes;
            var8 = var8.STATE;
            if(!(var11 === var8)) { _fun0001_ip = 290; continue _fun0001 }
 283:
            var9 = var7;
            if(!(var4 == var9)) { _fun0001_ip = 354; continue _fun0001 }
 290:
            var8 = var4 == var5;
            var11 = undefined;
            if(var8) { _fun0001_ip = 305; continue _fun0001 }
 299:
            var11 = var5.status_display_type;
 305:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var14];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StatusDisplayTypes;
            var8 = var8.DETAILS;
            var8 = var11 === var8;
            if(!var8) { _fun0001_ip = 345; continue _fun0001 }
 341:
            var8 = var4 != var13;
 345:
            var9 = var10;
            if(!var8) { _fun0001_ip = 354; continue _fun0001 }
 351:
            var9 = var13;
 354:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 2;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            if(var8) { _fun0001_ip = 1763; continue _fun0001 }
 385:
            var8 = var4 == var5;
            var10 = undefined;
            if(var8) { _fun0001_ip = 399; continue _fun0001 }
 394:
            var10 = var5.type;
 399:
            var8 = _closure1_slot3;
            var8 = var8.PLAYING;
            if(!(var10 === var8)) { _fun0001_ip = 420; continue _fun0001 }
 413:
            if(!(var4 == var9)) { _fun0001_ip = 1635; continue _fun0001 }
 420:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 5;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            if(!var8) { _fun0001_ip = 458; continue _fun0001 }
 448:
            if(!var6) { _fun0001_ip = 458; continue _fun0001 }
 451:
            if(!(var4 == var7)) { _fun0001_ip = 1470; continue _fun0001 }
 458:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 6;
            var8 = var11[var8];
            var10 = var10.bind(var3)(var8);
            var8 = var10.isStageActivity;
            var8 = var8.bind(var10)(var5);
            if(!var8) { _fun0001_ip = 499; continue _fun0001 }
 492:
            if(!(var4 == var2)) { _fun0001_ip = 1341; continue _fun0001 }
 499:
            var8 = var4 == var5;
            var10 = undefined;
            if(var8) { _fun0001_ip = 513; continue _fun0001 }
 508:
            var10 = var5.type;
 513:
            var8 = _closure1_slot3;
            var8 = var8.LISTENING;
            if(!(var10 === var8)) { _fun0001_ip = 534; continue _fun0001 }
 527:
            if(!(var4 == var9)) { _fun0001_ip = 1209; continue _fun0001 }
 534:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 7;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            if(!var8) { _fun0001_ip = 572; continue _fun0001 }
 562:
            if(!var6) { _fun0001_ip = 572; continue _fun0001 }
 565:
            if(!(var4 == var13)) { _fun0001_ip = 1077; continue _fun0001 }
 572:
            var6 = var4 == var5;
            var8 = undefined;
            if(var6) { _fun0001_ip = 586; continue _fun0001 }
 581:
            var8 = var5.type;
 586:
            var6 = _closure1_slot3;
            var6 = var6.WATCHING;
            if(!(var8 === var6)) { _fun0001_ip = 607; continue _fun0001 }
 600:
            if(!(var4 == var9)) { _fun0001_ip = 945; continue _fun0001 }
 607:
            var6 = var4 == var5;
            var8 = undefined;
            if(var6) { _fun0001_ip = 621; continue _fun0001 }
 616:
            var8 = var5.type;
 621:
            var6 = _closure1_slot3;
            var6 = var6.COMPETING;
            if(!(var8 === var6)) { _fun0001_ip = 642; continue _fun0001 }
 635:
            if(!(var4 == var9)) { _fun0001_ip = 813; continue _fun0001 }
 642:
            var8 = var4 == var5;
            var6 = undefined;
            if(var8) { _fun0001_ip = 656; continue _fun0001 }
 651:
            var6 = var5.type;
 656:
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var6 === var5)) { _fun0001_ip = 674; continue _fun0001 }
 670:
            if(!(var4 == var9)) { _fun0001_ip = 681; continue _fun0001 }
 674:
            var5 = {};
            _fun0001_ip = 808; continue _fun0001;
 681:
            var6 = {};
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var16 = var11.intl;
            var15 = var16.format;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.0wJXSk;
            var11 = {};
            var11['name'] = var9;
            var11 = var15.bind(var16)(var12, var11);
            var6['text'] = var11;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.0wJXSk;
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
 808:
            _fun0001_ip = 940; continue _fun0001;
 813:
            var6 = {};
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var16 = var11.intl;
            var15 = var16.format;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.QQ2wVF;
            var11 = {};
            var11['name'] = var9;
            var11 = var15.bind(var16)(var12, var11);
            var6['text'] = var11;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.QQ2wVF;
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
 940:
            _fun0001_ip = 1072; continue _fun0001;
 945:
            var6 = {};
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var16 = var11.intl;
            var15 = var16.format;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var9;
            var11 = var15.bind(var16)(var12, var11);
            var6['text'] = var11;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.pW3Ip6;
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
 1072:
            _fun0001_ip = 1204; continue _fun0001;
 1077:
            var6 = {};
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var16 = var11.intl;
            var15 = var16.format;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var13;
            var11 = var15.bind(var16)(var12, var11);
            var6['text'] = var11;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.pW3Ip6;
            var8 = {};
            var8['name'] = var13;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
 1204:
            _fun0001_ip = 1336; continue _fun0001;
 1209:
            var6 = {};
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var15 = var11.intl;
            var14 = var15.format;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.Vnuxub;
            var11 = {};
            var11['name'] = var9;
            var11 = var14.bind(var15)(var12, var11);
            var6['text'] = var11;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var13[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.Vnuxub;
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
 1336:
            _fun0001_ip = 1468; continue _fun0001;
 1341:
            var6 = {};
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var15 = var11.intl;
            var14 = var15.format;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var2;
            var11 = var14.bind(var15)(var12, var11);
            var6['text'] = var11;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var13[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.pW3Ip6;
            var8 = {};
            var8['name'] = var2;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
 1468:
            return var5;
 1470:
            var6 = var7.split;
            var5 = ';';
            var6 = var6.bind(var7)(var5);
            var4 = var4 == var6;
            var10 = undefined;
            if(var4) { _fun0001_ip = 1509; continue _fun0001 }
 1493:
            var5 = var6.join;
            var4 = ', ';
            var10 = var5.bind(var6)(var4);
 1509:
            var4 = {};
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 4;
            var7 = var11[var5];
            var7 = var6.bind(var3)(var7);
            var13 = var7.intl;
            var12 = var13.format;
            var7 = var11[var5];
            var7 = var6.bind(var3)(var7);
            var7 = var7.t;
            var8 = var7.Vnuxub;
            var7 = {};
            var7['name'] = var10;
            var7 = var12.bind(var13)(var8, var7);
            var4['text'] = var7;
            var7 = var11[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var11[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.Vnuxub;
            var5 = {};
            var5['name'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            var4['tooltip'] = var5;
            return var4;
 1635:
            var4 = {};
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var7 = var10[var5];
            var7 = var6.bind(var3)(var7);
            var12 = var7.intl;
            var11 = var12.format;
            var7 = var10[var5];
            var7 = var6.bind(var3)(var7);
            var7 = var7.t;
            var8 = var7.lFApm5;
            var7 = {};
            var7['game'] = var9;
            var7 = var11.bind(var12)(var8, var7);
            var4['text'] = var7;
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
 1763:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
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