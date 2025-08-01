// app/modules/markup/UnicodeSanitizationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var9 = function makeMatcher(arg1) {
        var3 = arg1;
        var1 = global;
        var4 = var1.RegExp;
        var2 = var3.join;
        var1 = '|';
        var6 = var2.bind(var3)(var1);
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var5 = 'gu';
        var7 = var2;
        var1 = new var7[var4](var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var1 = function safelyPartiallyDecodeURIComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var98 = 0;
            var2 = var2[var98];
            var97 = undefined;
            var3 = var3.bind(var97)(var2);
            var2 = var3.safeDecodeURIComponent;
            var4 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 1399; continue _fun0001 }
 47:
            var2 = var1.length;
            var3 = var2 > var98;
            var9 = '';
            var96 = 1;
            var95 = 921599;
            var94 = 917504;
            var93 = 119162;
            var92 = 119155;
            var91 = 113827;
            var90 = 113824;
            var89 = 78904;
            var88 = 78896;
            var87 = 69837;
            var86 = 69821;
            var85 = 65531;
            var84 = 65530;
            var83 = 65529;
            var82 = 65440;
            var81 = 65279;
            var80 = 65039;
            var79 = 65024;
            var78 = 65528;
            var77 = 65520;
            var76 = 12644;
            var75 = 8303;
            var74 = 8298;
            var73 = 8293;
            var72 = 8292;
            var71 = 8291;
            var70 = 8290;
            var69 = 8289;
            var68 = 8288;
            var67 = 8205;
            var66 = 8204;
            var65 = 8203;
            var64 = 6158;
            var63 = 6157;
            var62 = 6156;
            var61 = 6155;
            var60 = 6069;
            var59 = 6068;
            var58 = 4448;
            var57 = 4447;
            var56 = 2274;
            var55 = 1807;
            var54 = 1757;
            var53 = 1541;
            var52 = 1536;
            var51 = 847;
            var50 = 173;
            var49 = 10240;
            var48 = 12288;
            var47 = 8287;
            var46 = 8239;
            var45 = 8233;
            var44 = 8232;
            var43 = 8202;
            var42 = 8201;
            var41 = 8200;
            var40 = 8199;
            var39 = 8198;
            var38 = 8197;
            var37 = 8196;
            var36 = 8195;
            var35 = 8194;
            var34 = 8193;
            var33 = 8192;
            var32 = 5760;
            var31 = 160;
            var30 = 133;
            var29 = 128275;
            var28 = 128274;
            var27 = 128272;
            var26 = 128271;
            var25 = 8297;
            var24 = 8296;
            var23 = 8295;
            var22 = 8294;
            var21 = 1564;
            var20 = 8238;
            var19 = 8237;
            var18 = 8236;
            var17 = 8235;
            var16 = 8234;
            var15 = 8207;
            var14 = 8206;
            var13 = 128;
            var12 = global;
            var11 = 3;
            var10 = undefined;
            var8 = var1;
            var7 = var4;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            var2 = var9;
            if(!var3) { _fun0001_ip = 1397; continue _fun0001 }
 577:
            var3 = var8.codePointAt;
            r100 = var3.bind(var8)(var98);
            var3 = var7.codePointAt;
            r105 = var3.bind(var7)(var98);
            r103 = var8;
            r107 = var7;
            if(!(r100 === r105)) { _fun0001_ip = 667; continue _fun0001 }
 609:
            var100 = var12.String;
            var3 = var100.fromCodePoint;
            var3 = var3.bind(var100)(r100);
            var100 = var9 + var3;
            r101 = r103.substring;
            r100 = var3.length;
            var8 = r101.bind(r103)(r100);
            r101 = r107.substring;
            var3 = var3.length;
            var7 = r101.bind(r107)(var3);
            _fun0001_ip = 1379; continue _fun0001;
 667:
            r100 = var12.String;
            var3 = r100.fromCodePoint;
            r101 = var3.bind(r100)(r105);
            var3 = var12.encodeURIComponent;
            r100 = var3.bind(var97)(r101);
            var3 = var11;
            if(!(r100 !== r101)) { _fun0001_ip = 707; continue _fun0001 }
 702:
            var3 = r100.length;
 707:
            if(!(r105 >= var98)) { _fun0001_ip = 718; continue _fun0001 }
 711:
            if(!(!(r105 < var13))) { _fun0001_ip = 1315; continue _fun0001 }
 718:
            r104 = var14 === r105;
            if(r104) { _fun0001_ip = 729; continue _fun0001 }
 725:
            r104 = var15 === r105;
 729:
            if(r104) { _fun0001_ip = 736; continue _fun0001 }
 732:
            r104 = var16 === r105;
 736:
            if(r104) { _fun0001_ip = 743; continue _fun0001 }
 739:
            r104 = var17 === r105;
 743:
            if(r104) { _fun0001_ip = 750; continue _fun0001 }
 746:
            r104 = var18 === r105;
 750:
            if(r104) { _fun0001_ip = 757; continue _fun0001 }
 753:
            r104 = var19 === r105;
 757:
            if(r104) { _fun0001_ip = 764; continue _fun0001 }
 760:
            r104 = var20 === r105;
 764:
            if(r104) { _fun0001_ip = 771; continue _fun0001 }
 767:
            r104 = var21 === r105;
 771:
            if(r104) { _fun0001_ip = 778; continue _fun0001 }
 774:
            r104 = var22 === r105;
 778:
            if(r104) { _fun0001_ip = 785; continue _fun0001 }
 781:
            r104 = var23 === r105;
 785:
            if(r104) { _fun0001_ip = 792; continue _fun0001 }
 788:
            r104 = var24 === r105;
 792:
            if(r104) { _fun0001_ip = 799; continue _fun0001 }
 795:
            r104 = var25 === r105;
 799:
            if(r104) { _fun0001_ip = 806; continue _fun0001 }
 802:
            r104 = var26 === r105;
 806:
            if(r104) { _fun0001_ip = 813; continue _fun0001 }
 809:
            r104 = var27 === r105;
 813:
            if(r104) { _fun0001_ip = 820; continue _fun0001 }
 816:
            r104 = var28 === r105;
 820:
            if(r104) { _fun0001_ip = 827; continue _fun0001 }
 823:
            r104 = var29 === r105;
 827:
            if(r104) { _fun0001_ip = 834; continue _fun0001 }
 830:
            r104 = var30 === r105;
 834:
            if(r104) { _fun0001_ip = 841; continue _fun0001 }
 837:
            r104 = var31 === r105;
 841:
            if(r104) { _fun0001_ip = 848; continue _fun0001 }
 844:
            r104 = var32 === r105;
 848:
            if(r104) { _fun0001_ip = 855; continue _fun0001 }
 851:
            r104 = var33 === r105;
 855:
            if(r104) { _fun0001_ip = 862; continue _fun0001 }
 858:
            r104 = var34 === r105;
 862:
            if(r104) { _fun0001_ip = 869; continue _fun0001 }
 865:
            r104 = var35 === r105;
 869:
            if(r104) { _fun0001_ip = 876; continue _fun0001 }
 872:
            r104 = var36 === r105;
 876:
            if(r104) { _fun0001_ip = 883; continue _fun0001 }
 879:
            r104 = var37 === r105;
 883:
            if(r104) { _fun0001_ip = 890; continue _fun0001 }
 886:
            r104 = var38 === r105;
 890:
            if(r104) { _fun0001_ip = 897; continue _fun0001 }
 893:
            r104 = var39 === r105;
 897:
            if(r104) { _fun0001_ip = 904; continue _fun0001 }
 900:
            r104 = var40 === r105;
 904:
            if(r104) { _fun0001_ip = 911; continue _fun0001 }
 907:
            r104 = var41 === r105;
 911:
            if(r104) { _fun0001_ip = 918; continue _fun0001 }
 914:
            r104 = var42 === r105;
 918:
            if(r104) { _fun0001_ip = 925; continue _fun0001 }
 921:
            r104 = var43 === r105;
 925:
            if(r104) { _fun0001_ip = 932; continue _fun0001 }
 928:
            r104 = var44 === r105;
 932:
            if(r104) { _fun0001_ip = 939; continue _fun0001 }
 935:
            r104 = var45 === r105;
 939:
            if(r104) { _fun0001_ip = 946; continue _fun0001 }
 942:
            r104 = var46 === r105;
 946:
            if(r104) { _fun0001_ip = 953; continue _fun0001 }
 949:
            r104 = var47 === r105;
 953:
            if(r104) { _fun0001_ip = 960; continue _fun0001 }
 956:
            r104 = var48 === r105;
 960:
            if(r104) { _fun0001_ip = 967; continue _fun0001 }
 963:
            r104 = var49 === r105;
 967:
            if(r104) { _fun0001_ip = 974; continue _fun0001 }
 970:
            r104 = var50 === r105;
 974:
            if(r104) { _fun0001_ip = 981; continue _fun0001 }
 977:
            r104 = var51 === r105;
 981:
            if(r104) { _fun0001_ip = 998; continue _fun0001 }
 984:
            r102 = r105 >= var52;
            if(!r102) { _fun0001_ip = 995; continue _fun0001 }
 991:
            r102 = r105 <= var53;
 995:
            r104 = r102;
 998:
            if(r104) { _fun0001_ip = 1005; continue _fun0001 }
 1001:
            r104 = var54 === r105;
 1005:
            if(r104) { _fun0001_ip = 1012; continue _fun0001 }
 1008:
            r104 = var55 === r105;
 1012:
            if(r104) { _fun0001_ip = 1019; continue _fun0001 }
 1015:
            r104 = var56 === r105;
 1019:
            if(r104) { _fun0001_ip = 1026; continue _fun0001 }
 1022:
            r104 = var57 === r105;
 1026:
            if(r104) { _fun0001_ip = 1033; continue _fun0001 }
 1029:
            r104 = var58 === r105;
 1033:
            if(r104) { _fun0001_ip = 1040; continue _fun0001 }
 1036:
            r104 = var59 === r105;
 1040:
            if(r104) { _fun0001_ip = 1047; continue _fun0001 }
 1043:
            r104 = var60 === r105;
 1047:
            if(r104) { _fun0001_ip = 1054; continue _fun0001 }
 1050:
            r104 = var61 === r105;
 1054:
            if(r104) { _fun0001_ip = 1061; continue _fun0001 }
 1057:
            r104 = var62 === r105;
 1061:
            if(r104) { _fun0001_ip = 1068; continue _fun0001 }
 1064:
            r104 = var63 === r105;
 1068:
            if(r104) { _fun0001_ip = 1075; continue _fun0001 }
 1071:
            r104 = var64 === r105;
 1075:
            if(r104) { _fun0001_ip = 1082; continue _fun0001 }
 1078:
            r104 = var65 === r105;
 1082:
            if(r104) { _fun0001_ip = 1089; continue _fun0001 }
 1085:
            r104 = var66 === r105;
 1089:
            if(r104) { _fun0001_ip = 1096; continue _fun0001 }
 1092:
            r104 = var67 === r105;
 1096:
            if(r104) { _fun0001_ip = 1103; continue _fun0001 }
 1099:
            r104 = var68 === r105;
 1103:
            if(r104) { _fun0001_ip = 1110; continue _fun0001 }
 1106:
            r104 = var69 === r105;
 1110:
            if(r104) { _fun0001_ip = 1117; continue _fun0001 }
 1113:
            r104 = var70 === r105;
 1117:
            if(r104) { _fun0001_ip = 1124; continue _fun0001 }
 1120:
            r104 = var71 === r105;
 1124:
            if(r104) { _fun0001_ip = 1131; continue _fun0001 }
 1127:
            r104 = var72 === r105;
 1131:
            if(r104) { _fun0001_ip = 1138; continue _fun0001 }
 1134:
            r104 = var73 === r105;
 1138:
            if(r104) { _fun0001_ip = 1155; continue _fun0001 }
 1141:
            r102 = r105 >= var74;
            if(!r102) { _fun0001_ip = 1152; continue _fun0001 }
 1148:
            r102 = r105 <= var75;
 1152:
            r104 = r102;
 1155:
            if(r104) { _fun0001_ip = 1162; continue _fun0001 }
 1158:
            r104 = var76 === r105;
 1162:
            if(r104) { _fun0001_ip = 1179; continue _fun0001 }
 1165:
            r102 = r105 >= var77;
            if(!r102) { _fun0001_ip = 1176; continue _fun0001 }
 1172:
            r102 = r105 <= var78;
 1176:
            r104 = r102;
 1179:
            if(r104) { _fun0001_ip = 1196; continue _fun0001 }
 1182:
            r102 = r105 >= var79;
            if(!r102) { _fun0001_ip = 1193; continue _fun0001 }
 1189:
            r102 = r105 <= var80;
 1193:
            r104 = r102;
 1196:
            if(r104) { _fun0001_ip = 1203; continue _fun0001 }
 1199:
            r104 = var81 === r105;
 1203:
            if(r104) { _fun0001_ip = 1210; continue _fun0001 }
 1206:
            r104 = var82 === r105;
 1210:
            if(r104) { _fun0001_ip = 1217; continue _fun0001 }
 1213:
            r104 = var83 === r105;
 1217:
            if(r104) { _fun0001_ip = 1224; continue _fun0001 }
 1220:
            r104 = var84 === r105;
 1224:
            if(r104) { _fun0001_ip = 1231; continue _fun0001 }
 1227:
            r104 = var85 === r105;
 1231:
            if(r104) { _fun0001_ip = 1238; continue _fun0001 }
 1234:
            r104 = var86 === r105;
 1238:
            if(r104) { _fun0001_ip = 1245; continue _fun0001 }
 1241:
            r104 = var87 === r105;
 1245:
            if(r104) { _fun0001_ip = 1262; continue _fun0001 }
 1248:
            r102 = r105 >= var88;
            if(!r102) { _fun0001_ip = 1259; continue _fun0001 }
 1255:
            r102 = r105 <= var89;
 1259:
            r104 = r102;
 1262:
            if(r104) { _fun0001_ip = 1279; continue _fun0001 }
 1265:
            r102 = r105 >= var90;
            if(!r102) { _fun0001_ip = 1276; continue _fun0001 }
 1272:
            r102 = r105 <= var91;
 1276:
            r104 = r102;
 1279:
            if(r104) { _fun0001_ip = 1296; continue _fun0001 }
 1282:
            r102 = r105 >= var92;
            if(!r102) { _fun0001_ip = 1293; continue _fun0001 }
 1289:
            r102 = r105 <= var93;
 1293:
            r104 = r102;
 1296:
            if(r104) { _fun0001_ip = 1313; continue _fun0001 }
 1299:
            r102 = r105 >= var94;
            if(!r102) { _fun0001_ip = 1310; continue _fun0001 }
 1306:
            r102 = r105 <= var95;
 1310:
            r104 = r102;
 1313:
            _fun0001_ip = 1327; continue _fun0001;
 1315:
            r102 = _closure1_slot4;
            r102 = r102[r105];
            r104 = var96 !== r102;
 1327:
            r102 = r101;
            if(!r104) { _fun0001_ip = 1336; continue _fun0001 }
 1333:
            r102 = r100;
 1336:
            var100 = var9 + r102;
            r102 = r103.substring;
            var8 = r102.bind(r103)(var3);
            r106 = r107.substring;
            r102 = r101.length;
            var7 = r106.bind(r107)(r102);
            var10 = r105;
            var6 = r101;
            var5 = r100;
            var4 = var3;
 1379:
            var3 = var8.length;
            var9 = var100;
            var2 = var9;
            if(var3 > var98) { _fun0001_ip = 577; continue _fun0001 }
 1397:
            return var2;
 1399:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var8)(var3, var4, var5);
    var6 = var1.RegExp;
    var4 = /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\t\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
    var10 = var4.source;
    var5 = ['͏', '឴', '឵', 'ᅠ', 'ㅤ', 'ﾠ'];
    var4 = var5.join;
    var8 = '|';
    var5 = var4.bind(var5)(var8);
    var1 = var1.HermesInternal;
    var4 = var1.concat;
    var1 = '';
    var13 = var4.bind(var1)(var10, var8, var5);
    var1 = var6.prototype;
    var4 = Object.create(var1, {constructor: {value: var6}});
    var12 = 'gu';
    var14 = var4;
    var1 = new var14[var6](var13, var12, var11);
    var5 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot2 = var5;
    var6 = {};
    var1 = 'h';
    var6['character'] = var1;
    var1 = undefined;
    var4 = ['H', 'һ', 'հ', 'Ꮒ', 'ℎ', '𝐡', '𝒉', '𝒽', '𝓱', '𝔥', '𝕙', '𝖍', '𝗁', '𝗵', '𝘩', '𝙝', '𝚑', 'ｈ'];
    var4 = var9.bind(var1)(var4);
    var6['matcher'] = var4;
    var4 = new Array(6);
    var4[0] = var6;
    var6 = {};
    var8 = 't';
    var6['character'] = var8;
    var8 = ['T', '𝐭', '𝑡', '𝒕', '𝓉', '𝓽', '𝔱', '𝕥', '𝖙', '𝗍', '𝘁', '𝘵', '𝙩', '𝚝'];
    var8 = var9.bind(var1)(var8);
    var6['matcher'] = var8;
    var4[1] = var6;
    var6 = {};
    var8 = 'p';
    var6['character'] = var8;
    var8 = ['P', 'ρ', 'ϱ', 'р', '⍴', 'ⲣ', '𝐩', '𝑝', '𝒑', '𝓅', '𝓹', '𝔭', '𝕡', '𝖕', '𝗉', '𝗽', '𝘱', '𝙥', '𝚙', '𝛒', '𝛠', '𝜌', '𝜚', '𝝆', '𝝔', '𝞀', '𝞎', '𝞺', '𝟈', 'ｐ', 'ҏ'];
    var8 = var9.bind(var1)(var8);
    var6['matcher'] = var8;
    var4[2] = var6;
    var6 = {};
    var8 = 's';
    var6['character'] = var8;
    var8 = ['S', 'ƽ', 'ѕ', 'ꜱ', 'ꮪ', '𐑈', '𑣁', '𝐬', '𝑠', '𝒔', '𝓈', '𝓼', '𝔰', '𝕤', '𝖘', '𝗌', '𝘀', '𝘴', '𝙨', '𝚜', 'ｓ'];
    var8 = var9.bind(var1)(var8);
    var6['matcher'] = var8;
    var4[3] = var6;
    var6 = {};
    var8 = ':';
    var6['character'] = var8;
    var8 = ['ː', '˸', '։', '׃', '܃', '܄', 'ः', 'ઃ', '᛬', '᠃', '᠉', '⁚', '∶', 'ꓽ', '꞉', '︰', '：', ';', ';'];
    var8 = var9.bind(var1)(var8);
    var6['matcher'] = var8;
    var4[4] = var6;
    var6 = {};
    var8 = '/';
    var6['character'] = var8;
    var8 = ['᜵', '⁁', '⁄', '∕', '╱', '⟋', '⧸', 'Ⳇ', '⼃', '〳', 'ノ', '㇓', '丿', '𝈺'];
    var8 = var9.bind(var1)(var8);
    var6['matcher'] = var8;
    var4[5] = var6;
    var _closure1_slot3 = var4;
    var6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
    var _closure1_slot4 = var6;
    var6 = 1;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/markup/UnicodeSanitizationUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['BLANK_CHARACTERS_TO_SANITIZE_REGEX'] = var5;
    var5 = function sanitizeWhitespace(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = _closure1_slot2;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['sanitizeWhitespace'] = var5;
    var3['UNICODE_CONFUSABLES_FOR_URL_DETECTION'] = var4;
    var4 = function sanitizeUnicodeConfusables(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var1 = arg1;
            var5 = _closure2_slot0;
            var4 = var5.replace;
            var3 = var1.matcher;
            var1 = var1.character;
            var1 = var4.bind(var5)(var3, var1);
            _closure2_slot0 = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var3['sanitizeUnicodeConfusables'] = var4;
    var2 = function safelyMakeUrlHumanReadable(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.origin;
            var2 = 'null';
            var2 = var2 === var3;
            if(!var2) { _fun0002_ip = 43; continue _fun0002 }
 20:
            var5 = var1.pathname;
            var4 = var5.startsWith;
            var3 = '//';
            var2 = var4.bind(var5)(var3);
 43:
            if(var2) { _fun0002_ip = 207; continue _fun0002 }
 49:
            var2 = var1.username;
            var7 = '';
            var4 = var7;
            if(!(var7 !== var2)) { _fun0002_ip = 73; continue _fun0002 }
 65:
            var2 = var1.username;
            var4 = '' + var2;
 73:
            var2 = var1.password;
            var3 = var4;
            if(!(var7 !== var2)) { _fun0002_ip = 104; continue _fun0002 }
 86:
            var5 = var1.password;
            var2 = ':';
            var2 = var2 + var5;
            var3 = var4 + var2;
 104:
            var6 = var3;
            if(!(var7 !== var6)) { _fun0002_ip = 119; continue _fun0002 }
 111:
            var2 = '@';
            var6 = var3 + var2;
 119:
            var5 = var1.href;
            var4 = var5.substr;
            var2 = var1.protocol;
            var3 = var2.length;
            var2 = 2;
            var3 = var4.bind(var5)(var3, var2);
            var2 = '//';
            var5 = var7;
            if(!(var2 === var3)) { _fun0002_ip = 167; continue _fun0002 }
 164:
            var5 = var2;
 167:
            var11 = var1.protocol;
            var8 = var1.host;
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var12 = var7;
            var10 = var5;
            var9 = var6;
            var5 = var12[var2](var11, var10, var9, var8, var7);
            _fun0002_ip = 213; continue _fun0002;
 207:
            var5 = var1.protocol;
 213:
            var4 = _closure1_slot5;
            var2 = var1.pathname;
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var5 = var5 + var2;
            var2 = var1.search;
            var2 = var4.bind(var3)(var2);
            var2 = var5 + var2;
            var1 = var1.hash;
            var1 = var4.bind(var3)(var1);
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['safelyMakeUrlHumanReadable'] = var2;
    return var1;
})();