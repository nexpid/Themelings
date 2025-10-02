// app/modules/markup/UnicodeSanitizationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var8 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var8;
    var10 = function makeMatcher(arg1) {
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
case 0:
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
            if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var8.codePointAt;
            r100 = var3.bind(var8)(var98);
            var3 = var7.codePointAt;
            r105 = var3.bind(var7)(var98);
            r103 = var8;
            r107 = var7;
            if(!(r100 === r105)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
            _fun0001_ip = 8; continue _fun0001;
case 6:
            r100 = var12.String;
            var3 = r100.fromCodePoint;
            r101 = var3.bind(r100)(r105);
            var3 = var12.encodeURIComponent;
            r100 = var3.bind(var97)(r101);
            var3 = var11;
            if(!(r100 !== r101)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = r100.length;
case 9:
            if(!(r105 >= var98)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(!(!(r105 < var13))) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            r104 = var14 === r105;
            if(r104) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            r104 = var15 === r105;
case 14:
            if(r104) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            r104 = var16 === r105;
case 16:
            if(r104) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            r104 = var17 === r105;
case 18:
            if(r104) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            r104 = var18 === r105;
case 20:
            if(r104) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            r104 = var19 === r105;
case 22:
            if(r104) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            r104 = var20 === r105;
case 24:
            if(r104) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            r104 = var21 === r105;
case 26:
            if(r104) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            r104 = var22 === r105;
case 28:
            if(r104) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            r104 = var23 === r105;
case 30:
            if(r104) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            r104 = var24 === r105;
case 32:
            if(r104) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            r104 = var25 === r105;
case 34:
            if(r104) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            r104 = var26 === r105;
case 36:
            if(r104) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            r104 = var27 === r105;
case 38:
            if(r104) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            r104 = var28 === r105;
case 40:
            if(r104) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            r104 = var29 === r105;
case 42:
            if(r104) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            r104 = var30 === r105;
case 44:
            if(r104) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            r104 = var31 === r105;
case 46:
            if(r104) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            r104 = var32 === r105;
case 48:
            if(r104) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            r104 = var33 === r105;
case 50:
            if(r104) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            r104 = var34 === r105;
case 52:
            if(r104) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            r104 = var35 === r105;
case 54:
            if(r104) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            r104 = var36 === r105;
case 56:
            if(r104) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            r104 = var37 === r105;
case 58:
            if(r104) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            r104 = var38 === r105;
case 60:
            if(r104) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            r104 = var39 === r105;
case 62:
            if(r104) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            r104 = var40 === r105;
case 64:
            if(r104) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            r104 = var41 === r105;
case 66:
            if(r104) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            r104 = var42 === r105;
case 68:
            if(r104) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            r104 = var43 === r105;
case 70:
            if(r104) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            r104 = var44 === r105;
case 72:
            if(r104) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            r104 = var45 === r105;
case 74:
            if(r104) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            r104 = var46 === r105;
case 76:
            if(r104) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            r104 = var47 === r105;
case 78:
            if(r104) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            r104 = var48 === r105;
case 80:
            if(r104) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            r104 = var49 === r105;
case 82:
            if(r104) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            r104 = var50 === r105;
case 84:
            if(r104) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            r104 = var51 === r105;
case 86:
            if(r104) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            r102 = r105 >= var52;
            if(!r102) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            r102 = r105 <= var53;
case 90:
            r104 = r102;
case 88:
            if(r104) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            r104 = var54 === r105;
case 92:
            if(r104) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            r104 = var55 === r105;
case 94:
            if(r104) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            r104 = var56 === r105;
case 96:
            if(r104) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            r104 = var57 === r105;
case 98:
            if(r104) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            r104 = var58 === r105;
case 100:
            if(r104) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            r104 = var59 === r105;
case 102:
            if(r104) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            r104 = var60 === r105;
case 104:
            if(r104) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            r104 = var61 === r105;
case 106:
            if(r104) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            r104 = var62 === r105;
case 108:
            if(r104) { _fun0001_ip = 110; continue _fun0001 }
case 111:
            r104 = var63 === r105;
case 110:
            if(r104) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            r104 = var64 === r105;
case 112:
            if(r104) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            r104 = var65 === r105;
case 114:
            if(r104) { _fun0001_ip = 116; continue _fun0001 }
case 117:
            r104 = var66 === r105;
case 116:
            if(r104) { _fun0001_ip = 118; continue _fun0001 }
case 119:
            r104 = var67 === r105;
case 118:
            if(r104) { _fun0001_ip = 120; continue _fun0001 }
case 121:
            r104 = var68 === r105;
case 120:
            if(r104) { _fun0001_ip = 122; continue _fun0001 }
case 123:
            r104 = var69 === r105;
case 122:
            if(r104) { _fun0001_ip = 124; continue _fun0001 }
case 125:
            r104 = var70 === r105;
case 124:
            if(r104) { _fun0001_ip = 126; continue _fun0001 }
case 127:
            r104 = var71 === r105;
case 126:
            if(r104) { _fun0001_ip = 128; continue _fun0001 }
case 129:
            r104 = var72 === r105;
case 128:
            if(r104) { _fun0001_ip = 130; continue _fun0001 }
case 131:
            r104 = var73 === r105;
case 130:
            if(r104) { _fun0001_ip = 132; continue _fun0001 }
case 133:
            r102 = r105 >= var74;
            if(!r102) { _fun0001_ip = 134; continue _fun0001 }
case 135:
            r102 = r105 <= var75;
case 134:
            r104 = r102;
case 132:
            if(r104) { _fun0001_ip = 136; continue _fun0001 }
case 137:
            r104 = var76 === r105;
case 136:
            if(r104) { _fun0001_ip = 138; continue _fun0001 }
case 139:
            r102 = r105 >= var77;
            if(!r102) { _fun0001_ip = 140; continue _fun0001 }
case 141:
            r102 = r105 <= var78;
case 140:
            r104 = r102;
case 138:
            if(r104) { _fun0001_ip = 142; continue _fun0001 }
case 143:
            r102 = r105 >= var79;
            if(!r102) { _fun0001_ip = 144; continue _fun0001 }
case 145:
            r102 = r105 <= var80;
case 144:
            r104 = r102;
case 142:
            if(r104) { _fun0001_ip = 146; continue _fun0001 }
case 147:
            r104 = var81 === r105;
case 146:
            if(r104) { _fun0001_ip = 148; continue _fun0001 }
case 149:
            r104 = var82 === r105;
case 148:
            if(r104) { _fun0001_ip = 150; continue _fun0001 }
case 151:
            r104 = var83 === r105;
case 150:
            if(r104) { _fun0001_ip = 152; continue _fun0001 }
case 153:
            r104 = var84 === r105;
case 152:
            if(r104) { _fun0001_ip = 154; continue _fun0001 }
case 155:
            r104 = var85 === r105;
case 154:
            if(r104) { _fun0001_ip = 156; continue _fun0001 }
case 157:
            r104 = var86 === r105;
case 156:
            if(r104) { _fun0001_ip = 158; continue _fun0001 }
case 159:
            r104 = var87 === r105;
case 158:
            if(r104) { _fun0001_ip = 160; continue _fun0001 }
case 161:
            r102 = r105 >= var88;
            if(!r102) { _fun0001_ip = 162; continue _fun0001 }
case 163:
            r102 = r105 <= var89;
case 162:
            r104 = r102;
case 160:
            if(r104) { _fun0001_ip = 164; continue _fun0001 }
case 165:
            r102 = r105 >= var90;
            if(!r102) { _fun0001_ip = 166; continue _fun0001 }
case 167:
            r102 = r105 <= var91;
case 166:
            r104 = r102;
case 164:
            if(r104) { _fun0001_ip = 168; continue _fun0001 }
case 169:
            r102 = r105 >= var92;
            if(!r102) { _fun0001_ip = 170; continue _fun0001 }
case 171:
            r102 = r105 <= var93;
case 170:
            r104 = r102;
case 168:
            if(r104) { _fun0001_ip = 172; continue _fun0001 }
case 173:
            r102 = r105 >= var94;
            if(!r102) { _fun0001_ip = 174; continue _fun0001 }
case 175:
            r102 = r105 <= var95;
case 174:
            r104 = r102;
case 172:
            _fun0001_ip = 176; continue _fun0001;
case 13:
            r102 = _closure1_slot5;
            r102 = r102[r105];
            r104 = var96 !== r102;
case 176:
            r102 = r101;
            if(!r104) { _fun0001_ip = 177; continue _fun0001 }
case 178:
            r102 = r100;
case 177:
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
case 8:
            var3 = var8.length;
            var9 = var100;
            var2 = var9;
            if(var3 > var98) { _fun0001_ip = 5; continue _fun0001 }
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var13 = ['͏', '឴', '឵', 'ᅠ', 'ㅤ', 'ﾠ'];
    var6 = var1.RegExp;
    var4 = /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\t\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
    var7 = var4.source;
    var4 = var13.join;
    var12 = '|';
    var5 = var4.bind(var13)(var12);
    var4 = var1.HermesInternal;
    var4 = var4.concat;
    var11 = '';
    var16 = var4.bind(var11)(var7, var12, var5);
    var5 = var6.prototype;
    var5 = Object.create(var5, {constructor: {value: var6}});
    var7 = 'gu';
    var17 = var5;
    var15 = var7;
    var4 = new var17[var6](var16, var15, var14);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot2 = var6;
    var5 = var1.RegExp;
    var4 = /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\x08\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
    var9 = var4.source;
    var4 = var13.join;
    var4 = var4.bind(var13)(var12);
    var1 = var1.HermesInternal;
    var1 = var1.concat;
    var16 = var1.bind(var11)(var9, var12, var4);
    var4 = var5.prototype;
    var4 = Object.create(var4, {constructor: {value: var5}});
    var17 = var4;
    var15 = var7;
    var1 = new var17[var5](var16, var15, var14);
    var5 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot3 = var5;
    var7 = {};
    var1 = 'h';
    var7['character'] = var1;
    var1 = undefined;
    var4 = ['H', 'һ', 'հ', 'Ꮒ', 'ℎ', '𝐡', '𝒉', '𝒽', '𝓱', '𝔥', '𝕙', '𝖍', '𝗁', '𝗵', '𝘩', '𝙝', '𝚑', 'ｈ'];
    var4 = var10.bind(var1)(var4);
    var7['matcher'] = var4;
    var4 = new Array(6);
    var4[0] = var7;
    var7 = {};
    var9 = 't';
    var7['character'] = var9;
    var9 = ['T', '𝐭', '𝑡', '𝒕', '𝓉', '𝓽', '𝔱', '𝕥', '𝖙', '𝗍', '𝘁', '𝘵', '𝙩', '𝚝'];
    var9 = var10.bind(var1)(var9);
    var7['matcher'] = var9;
    var4[1] = var7;
    var7 = {};
    var9 = 'p';
    var7['character'] = var9;
    var9 = ['P', 'ρ', 'ϱ', 'р', '⍴', 'ⲣ', '𝐩', '𝑝', '𝒑', '𝓅', '𝓹', '𝔭', '𝕡', '𝖕', '𝗉', '𝗽', '𝘱', '𝙥', '𝚙', '𝛒', '𝛠', '𝜌', '𝜚', '𝝆', '𝝔', '𝞀', '𝞎', '𝞺', '𝟈', 'ｐ', 'ҏ'];
    var9 = var10.bind(var1)(var9);
    var7['matcher'] = var9;
    var4[2] = var7;
    var7 = {};
    var9 = 's';
    var7['character'] = var9;
    var9 = ['S', 'ƽ', 'ѕ', 'ꜱ', 'ꮪ', '𐑈', '𑣁', '𝐬', '𝑠', '𝒔', '𝓈', '𝓼', '𝔰', '𝕤', '𝖘', '𝗌', '𝘀', '𝘴', '𝙨', '𝚜', 'ｓ'];
    var9 = var10.bind(var1)(var9);
    var7['matcher'] = var9;
    var4[3] = var7;
    var7 = {};
    var9 = ':';
    var7['character'] = var9;
    var9 = ['ː', '˸', '։', '׃', '܃', '܄', 'ः', 'ઃ', '᛬', '᠃', '᠉', '⁚', '∶', 'ꓽ', '꞉', '︰', '：', ';', ';'];
    var9 = var10.bind(var1)(var9);
    var7['matcher'] = var9;
    var4[4] = var7;
    var7 = {};
    var9 = '/';
    var7['character'] = var9;
    var9 = ['᜵', '⁁', '⁄', '∕', '╱', '⟋', '⧸', 'Ⳇ', '⼃', '〳', 'ノ', '㇓', '丿', '𝈺'];
    var9 = var10.bind(var1)(var9);
    var7['matcher'] = var9;
    var4[5] = var7;
    var _closure1_slot4 = var4;
    var7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
    var _closure1_slot5 = var7;
    var7 = 1;
    var8 = var8[var7];
    var7 = require;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/markup/UnicodeSanitizationUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['BLANK_CHARACTERS_TO_SANITIZE_REGEX'] = var6;
    var3['BLANK_CHARACTERS_TO_SANITIZE_REGEX_EXCLUDING_TABS'] = var5;
    var5 = function sanitizeWhitespace(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = _closure1_slot2;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['sanitizeWhitespace'] = var5;
    var5 = function sanitizeWhitespaceExcludingTabs(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = _closure1_slot3;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['sanitizeWhitespaceExcludingTabs'] = var5;
    var3['UNICODE_CONFUSABLES_FOR_URL_DETECTION'] = var4;
    var4 = function sanitizeUnicodeConfusables(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
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
case 0:
            var1 = arg1;
            var3 = var1.origin;
            var2 = 'null';
            var2 = var2 === var3;
            if(!var2) { _fun0002_ip = 179; continue _fun0002 }
case 180:
            var5 = var1.pathname;
            var4 = var5.startsWith;
            var3 = '//';
            var2 = var4.bind(var5)(var3);
case 179:
            if(var2) { _fun0002_ip = 181; continue _fun0002 }
case 182:
            var2 = var1.username;
            var7 = '';
            var4 = var7;
            if(!(var7 !== var2)) { _fun0002_ip = 183; continue _fun0002 }
case 184:
            var2 = var1.username;
            var4 = '' + var2;
case 183:
            var2 = var1.password;
            var3 = var4;
            if(!(var7 !== var2)) { _fun0002_ip = 185; continue _fun0002 }
case 186:
            var5 = var1.password;
            var2 = ':';
            var2 = var2 + var5;
            var3 = var4 + var2;
case 185:
            var6 = var3;
            if(!(var7 !== var6)) { _fun0002_ip = 187; continue _fun0002 }
case 188:
            var2 = '@';
            var6 = var3 + var2;
case 187:
            var5 = var1.href;
            var4 = var5.substr;
            var2 = var1.protocol;
            var3 = var2.length;
            var2 = 2;
            var3 = var4.bind(var5)(var3, var2);
            var2 = '//';
            var5 = var7;
            if(!(var2 === var3)) { _fun0002_ip = 189; continue _fun0002 }
case 190:
            var5 = var2;
case 189:
            var11 = var1.protocol;
            var8 = var1.host;
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var12 = var7;
            var10 = var5;
            var9 = var6;
            var5 = var12[var2](var11, var10, var9, var8, var7);
            _fun0002_ip = 191; continue _fun0002;
case 181:
            var5 = var1.protocol;
case 191:
            var4 = _closure1_slot6;
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