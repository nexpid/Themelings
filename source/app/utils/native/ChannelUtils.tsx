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
case 0:
            var3 = arg1;
            var2 = _closure1_slot6;
            var2 = var2.PRIVATE_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot6;
            var2 = var2.ANNOUNCEMENT_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot6;
            var2 = var2.PUBLIC_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = null;
            return var2;
case 4:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 2:
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
case 0:
            var4 = arg1;
            var7 = arg2;
            var9 = null;
            var1 = var7;
            if(!(var9 == var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = {};
case 7:
            var6 = var1.isRulesChannel;
            var11 = var1.textFocused;
            var10 = var1.locked;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 29;
            var2 = var3[var2];
            var3 = undefined;
            var12 = var5.bind(var3)(var2);
            var8 = var12.shouldShowMembershipVerificationGate;
            var5 = var4.guild_id;
            var13 = _closure1_slot4;
            var2 = new Array(3);
            var2[0] = var13;
            var13 = _closure1_slot5;
            var2[1] = var13;
            var13 = _closure1_slot3;
            var2[2] = var13;
            var8 = var8.bind(var12)(var5, var2);
            var2 = var4.isForumPost;
            var2 = var2.bind(var4)();
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = _closure1_slot7;
            var2 = var4.type;
            var2 = var5.bind(var3)(var2);
            if(!(var9 == var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = var4.isMediaChannel;
            var12 = var5.bind(var4)();
            var5 = var4.isNSFW;
            var5 = var5.bind(var4)();
            var14 = var4.type;
            var13 = _closure1_slot6;
            var13 = var13.PRIVATE_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var13 = _closure1_slot6;
            var13 = var13.ANNOUNCEMENT_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var13 = _closure1_slot6;
            var13 = var13.PUBLIC_THREAD;
            if(!(var13 !== var14)) { _fun0002_ip = 13; continue _fun0002 }
case 16:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_CATEGORY;
            if(!(var13 !== var14)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_TEXT;
            if(!(var13 !== var14)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_FORUM;
            if(!(var13 !== var14)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_MEDIA;
            if(!(var13 !== var14)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var13 = _closure1_slot6;
            var13 = var13.GROUP_DM;
            if(!(var13 !== var14)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var13 = _closure1_slot6;
            var13 = var13.DM;
            if(!(var13 !== var14)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_ANNOUNCEMENT;
            if(!(var13 !== var14)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var13 !== var14)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_VOICE;
            if(!(var13 !== var14)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var13 = _closure1_slot6;
            var13 = var13.GUILD_DIRECTORY;
            if(!(var13 !== var14)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            return var9;
case 35:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 13;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            return var13;
case 33:
            if(var11) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            if(!var8) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            if(!(var9 != var7)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var11 = var7.ignoreTraits;
            if(var11) { _fun0002_ip = 39; continue _fun0002 }
case 41:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.bind(var3)(var4);
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var11) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var11 = 14;
            var11 = var15[var11];
            var11 = var14.bind(var3)(var11);
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var13 = 36;
            var13 = var15[var13];
            var11 = var14.bind(var3)(var13);
case 45:
            _fun0002_ip = 46; continue _fun0002;
case 39:
            if(!var10) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            if(!(var9 != var7)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var13 = var7.ignoreTraits;
            if(var13) { _fun0002_ip = 47; continue _fun0002 }
case 49:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 36;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            _fun0002_ip = 51; continue _fun0002;
case 47:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 31;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.bind(var3)(var4);
            if(!var14) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            if(!(var9 != var7)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var14 = var7.ignoreTraits;
            if(var14) { _fun0002_ip = 52; continue _fun0002 }
case 54:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 14;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            _fun0002_ip = 56; continue _fun0002;
case 52:
            if(!var5) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            if(!(var9 != var7)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var15 = var7.ignoreTraits;
            if(var15) { _fun0002_ip = 57; continue _fun0002 }
case 59:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 15;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            _fun0002_ip = 61; continue _fun0002;
case 57:
            var16 = var4.isSpoilerChannel;
            var16 = var16.bind(var4)();
            if(!var16) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            if(!(var9 != var7)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var16 = var7.ignoreTraits;
            if(var16) { _fun0002_ip = 62; continue _fun0002 }
case 64:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 16;
            var16 = var18[var16];
            var16 = var17.bind(var3)(var16);
            _fun0002_ip = 66; continue _fun0002;
case 62:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 12;
            var17 = var19[var17];
            var16 = var18.bind(var3)(var17);
case 66:
            var15 = var16;
case 61:
            var14 = var15;
case 56:
            var13 = var14;
case 51:
            var11 = var13;
case 46:
            _fun0002_ip = 67; continue _fun0002;
case 37:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 22;
            var13 = var15[var13];
            var11 = var14.bind(var3)(var13);
case 67:
            return var11;
case 31:
            if(!var8) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            if(!(var9 != var7)) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var8 = var7.ignoreTraits;
            if(var8) { _fun0002_ip = 68; continue _fun0002 }
case 70:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 31;
            var8 = var13[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.bind(var3)(var4);
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var8) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var8 = 17;
            var8 = var14[var8];
            var8 = var13.bind(var3)(var8);
            _fun0002_ip = 74; continue _fun0002;
case 72:
            var11 = 36;
            var11 = var14[var11];
            var8 = var13.bind(var3)(var11);
case 74:
            _fun0002_ip = 75; continue _fun0002;
case 68:
            if(!var10) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            if(!(var9 != var7)) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var10 = var7.ignoreTraits;
            if(var10) { _fun0002_ip = 76; continue _fun0002 }
case 78:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 36;
            var10 = var13[var10];
            var10 = var11.bind(var3)(var10);
            _fun0002_ip = 80; continue _fun0002;
case 76:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.bind(var3)(var4);
            if(!var11) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            if(!(var9 != var7)) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var11 = var7.ignoreTraits;
            if(var11) { _fun0002_ip = 81; continue _fun0002 }
case 83:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 17;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            _fun0002_ip = 85; continue _fun0002;
case 81:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 11;
            var13 = var15[var13];
            var11 = var14.bind(var3)(var13);
case 85:
            var10 = var11;
case 80:
            var8 = var10;
case 75:
            return var8;
case 29:
            if(var6) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            if(!var5) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            if(!(var9 != var7)) { _fun0002_ip = 90; continue _fun0002 }
case 91:
            var8 = var7.ignoreTraits;
            if(var8) { _fun0002_ip = 88; continue _fun0002 }
case 90:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 20;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            _fun0002_ip = 92; continue _fun0002;
case 88:
            var10 = var4.isSpoilerChannel;
            var10 = var10.bind(var4)();
            if(!var10) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            if(!(var9 != var7)) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var10 = var7.ignoreTraits;
            if(var10) { _fun0002_ip = 93; continue _fun0002 }
case 95:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 21;
            var10 = var13[var10];
            var10 = var11.bind(var3)(var10);
            _fun0002_ip = 97; continue _fun0002;
case 93:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.bind(var3)(var4);
            if(!var11) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            if(!(var9 != var7)) { _fun0002_ip = 100; continue _fun0002 }
case 101:
            var11 = var7.ignoreTraits;
            if(var11) { _fun0002_ip = 98; continue _fun0002 }
case 100:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 35;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            _fun0002_ip = 102; continue _fun0002;
case 98:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 10;
            var13 = var15[var13];
            var11 = var14.bind(var3)(var13);
case 102:
            var10 = var11;
case 97:
            var8 = var10;
case 92:
            _fun0002_ip = 103; continue _fun0002;
case 86:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 30;
            var10 = var13[var10];
            var8 = var11.bind(var3)(var10);
case 103:
            return var8;
case 27:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 9;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            return var8;
case 25:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 8;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            return var8;
case 23:
            if(var6) { _fun0002_ip = 104; continue _fun0002 }
case 105:
            if(!var5) { _fun0002_ip = 106; continue _fun0002 }
case 107:
            if(!(var9 != var7)) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            var8 = var7.ignoreTraits;
            if(var8) { _fun0002_ip = 106; continue _fun0002 }
case 108:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 27;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            _fun0002_ip = 110; continue _fun0002;
case 106:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 111; continue _fun0002 }
case 112:
            if(!(var9 != var7)) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var10 = var7.ignoreTraits;
            if(var10) { _fun0002_ip = 111; continue _fun0002 }
case 113:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 33;
            var10 = var13[var10];
            var10 = var11.bind(var3)(var10);
            _fun0002_ip = 115; continue _fun0002;
case 111:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 26;
            var11 = var14[var11];
            var10 = var13.bind(var3)(var11);
case 115:
            var8 = var10;
case 110:
            _fun0002_ip = 116; continue _fun0002;
case 104:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 30;
            var10 = var13[var10];
            var8 = var11.bind(var3)(var10);
case 116:
            return var8;
case 21:
            if(var6) { _fun0002_ip = 117; continue _fun0002 }
case 118:
            if(!var5) { _fun0002_ip = 119; continue _fun0002 }
case 120:
            if(!(var9 != var7)) { _fun0002_ip = 121; continue _fun0002 }
case 122:
            var8 = var7.ignoreTraits;
            if(var8) { _fun0002_ip = 119; continue _fun0002 }
case 121:
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var12) { _fun0002_ip = 123; continue _fun0002 }
case 124:
            var8 = 24;
            var8 = var13[var8];
            _fun0002_ip = 125; continue _fun0002;
case 123:
            var11 = 27;
            var8 = var13[var11];
case 125:
            var8 = var10.bind(var3)(var8);
            _fun0002_ip = 126; continue _fun0002;
case 119:
            var10 = var4.isSpoilerChannel;
            var10 = var10.bind(var4)();
            if(!var10) { _fun0002_ip = 127; continue _fun0002 }
case 128:
            if(!(var9 != var7)) { _fun0002_ip = 129; continue _fun0002 }
case 130:
            var10 = var7.ignoreTraits;
            if(var10) { _fun0002_ip = 127; continue _fun0002 }
case 129:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 25;
            var10 = var13[var10];
            var10 = var11.bind(var3)(var10);
            _fun0002_ip = 131; continue _fun0002;
case 127:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.bind(var3)(var4);
            if(!var11) { _fun0002_ip = 132; continue _fun0002 }
case 133:
            if(!(var9 != var7)) { _fun0002_ip = 134; continue _fun0002 }
case 135:
            var11 = var7.ignoreTraits;
            if(var11) { _fun0002_ip = 132; continue _fun0002 }
case 134:
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var12) { _fun0002_ip = 136; continue _fun0002 }
case 137:
            var11 = 34;
            var11 = var15[var11];
            _fun0002_ip = 138; continue _fun0002;
case 136:
            var14 = 33;
            var11 = var15[var14];
case 138:
            var11 = var13.bind(var3)(var11);
            _fun0002_ip = 139; continue _fun0002;
case 132:
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var12) { _fun0002_ip = 140; continue _fun0002 }
case 141:
            var12 = 23;
            var12 = var15[var12];
            _fun0002_ip = 142; continue _fun0002;
case 140:
            var14 = 26;
            var12 = var15[var14];
case 142:
            var11 = var13.bind(var3)(var12);
case 139:
            var10 = var11;
case 131:
            var8 = var10;
case 126:
            _fun0002_ip = 143; continue _fun0002;
case 117:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 30;
            var10 = var12[var10];
            var8 = var11.bind(var3)(var10);
case 143:
            return var8;
case 19:
            if(var6) { _fun0002_ip = 144; continue _fun0002 }
case 145:
            if(!var5) { _fun0002_ip = 146; continue _fun0002 }
case 147:
            if(!(var9 != var7)) { _fun0002_ip = 148; continue _fun0002 }
case 149:
            var5 = var7.ignoreTraits;
            if(var5) { _fun0002_ip = 146; continue _fun0002 }
case 148:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var5 = var6.bind(var3)(var5);
            _fun0002_ip = 150; continue _fun0002;
case 146:
            var6 = var4.isSpoilerChannel;
            var6 = var6.bind(var4)();
            if(!var6) { _fun0002_ip = 151; continue _fun0002 }
case 152:
            if(!(var9 != var7)) { _fun0002_ip = 153; continue _fun0002 }
case 154:
            var6 = var7.ignoreTraits;
            if(var6) { _fun0002_ip = 151; continue _fun0002 }
case 153:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 19;
            var6 = var10[var6];
            var6 = var8.bind(var3)(var6);
            _fun0002_ip = 155; continue _fun0002;
case 151:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 31;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var4);
            if(!var8) { _fun0002_ip = 156; continue _fun0002 }
case 157:
            if(!(var9 != var7)) { _fun0002_ip = 158; continue _fun0002 }
case 159:
            var7 = var7.ignoreTraits;
            if(var7) { _fun0002_ip = 156; continue _fun0002 }
case 158:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 28;
            var7 = var10[var7];
            var7 = var8.bind(var3)(var7);
            _fun0002_ip = 160; continue _fun0002;
case 156:
            var8 = var4.linkedLobby;
            if(!(var9 == var8)) { _fun0002_ip = 161; continue _fun0002 }
case 162:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 7;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            _fun0002_ip = 163; continue _fun0002;
case 161:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 32;
            var9 = var11[var9];
            var8 = var10.bind(var3)(var9);
case 163:
            var7 = var8;
case 160:
            var6 = var7;
case 155:
            var5 = var6;
case 150:
            _fun0002_ip = 164; continue _fun0002;
case 144:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 30;
            var6 = var8[var6];
            var5 = var7.bind(var3)(var6);
case 164:
            return var5;
case 17:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            return var5;
case 13:
            var5 = _closure1_slot7;
            var4 = var4.type;
            var4 = var5.bind(var3)(var4);
            return var4;
case 11:
            return var2;
case 9:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 22;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function getChannelIconComponent(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var7 = null;
            var1 = var5;
            if(!(var7 == var1)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = {};
case 7:
            var4 = var1.isRulesChannel;
            var10 = var1.textFocused;
            var9 = var1.locked;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 29;
            var2 = var3[var2];
            var3 = undefined;
            var12 = var8.bind(var3)(var2);
            var11 = var12.shouldShowMembershipVerificationGate;
            var8 = var6.guild_id;
            var13 = _closure1_slot4;
            var2 = new Array(3);
            var2[0] = var13;
            var13 = _closure1_slot5;
            var2[1] = var13;
            var13 = _closure1_slot3;
            var2[2] = var13;
            var8 = var11.bind(var12)(var8, var2);
            var2 = var6.isForumPost;
            var2 = var2.bind(var6)();
            if(var2) { _fun0003_ip = 165; continue _fun0003 }
case 10:
            var2 = var6.isMediaChannel;
            var11 = var2.bind(var6)();
            var2 = var6.isNSFW;
            var2 = var2.bind(var6)();
            var13 = var6.type;
            var12 = _closure1_slot6;
            var12 = var12.PRIVATE_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 166; continue _fun0003 }
case 167:
            var12 = _closure1_slot6;
            var12 = var12.ANNOUNCEMENT_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 168; continue _fun0003 }
case 169:
            var12 = _closure1_slot6;
            var12 = var12.PUBLIC_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 168; continue _fun0003 }
case 170:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_CATEGORY;
            if(!(var12 !== var13)) { _fun0003_ip = 171; continue _fun0003 }
case 172:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_TEXT;
            if(!(var12 !== var13)) { _fun0003_ip = 173; continue _fun0003 }
case 174:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_FORUM;
            if(!(var12 !== var13)) { _fun0003_ip = 175; continue _fun0003 }
case 176:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_MEDIA;
            if(!(var12 !== var13)) { _fun0003_ip = 177; continue _fun0003 }
case 178:
            var12 = _closure1_slot6;
            var12 = var12.GROUP_DM;
            if(!(var12 !== var13)) { _fun0003_ip = 179; continue _fun0003 }
case 180:
            var12 = _closure1_slot6;
            var12 = var12.DM;
            if(!(var12 !== var13)) { _fun0003_ip = 181; continue _fun0003 }
case 182:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_ANNOUNCEMENT;
            if(!(var12 !== var13)) { _fun0003_ip = 183; continue _fun0003 }
case 184:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 185; continue _fun0003 }
case 186:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 187; continue _fun0003 }
case 188:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_DIRECTORY;
            if(!(var12 !== var13)) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            return var3;
case 189:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 67;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.HubIcon;
            return var12;
case 187:
            if(var10) { _fun0003_ip = 191; continue _fun0003 }
case 192:
            if(!var8) { _fun0003_ip = 193; continue _fun0003 }
case 194:
            if(!(var7 != var5)) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var10 = var5.ignoreTraits;
            if(var10) { _fun0003_ip = 193; continue _fun0003 }
case 195:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var6);
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var10) { _fun0003_ip = 197; continue _fun0003 }
case 198:
            var10 = 63;
            var10 = var14[var10];
            var10 = var13.bind(var3)(var10);
            var10 = var10.VoiceLockIcon;
            _fun0003_ip = 199; continue _fun0003;
case 197:
            var12 = 60;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var10 = var12.LockIcon;
case 199:
            _fun0003_ip = 200; continue _fun0003;
case 193:
            if(!var9) { _fun0003_ip = 201; continue _fun0003 }
case 39:
            if(!(var7 != var5)) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var12 = var5.ignoreTraits;
            if(var12) { _fun0003_ip = 201; continue _fun0003 }
case 202:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 60;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.LockIcon;
            _fun0003_ip = 69; continue _fun0003;
case 201:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 31;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.bind(var3)(var6);
            if(!var13) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            if(!(var7 != var5)) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var13 = var5.ignoreTraits;
            if(var13) { _fun0003_ip = 204; continue _fun0003 }
case 206:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 63;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.VoiceLockIcon;
            _fun0003_ip = 31; continue _fun0003;
case 204:
            if(!var2) { _fun0003_ip = 208; continue _fun0003 }
case 209:
            if(!(var7 != var5)) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var14 = var5.ignoreTraits;
            if(var14) { _fun0003_ip = 208; continue _fun0003 }
case 210:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 64;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.VoiceWarningIcon;
            _fun0003_ip = 212; continue _fun0003;
case 208:
            var15 = var6.isSpoilerChannel;
            var15 = var15.bind(var6)();
            if(!var15) { _fun0003_ip = 213; continue _fun0003 }
case 214:
            if(!(var7 != var5)) { _fun0003_ip = 215; continue _fun0003 }
case 216:
            var15 = var5.ignoreTraits;
            if(var15) { _fun0003_ip = 213; continue _fun0003 }
case 215:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 65;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            var15 = var15.VoiceNormalSpoilerIcon;
            _fun0003_ip = 217; continue _fun0003;
case 213:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 66;
            var16 = var18[var16];
            var16 = var17.bind(var3)(var16);
            var15 = var16.VoiceNormalIcon;
case 217:
            var14 = var15;
case 212:
            var13 = var14;
case 31:
            var12 = var13;
case 69:
            var10 = var12;
case 200:
            _fun0003_ip = 218; continue _fun0003;
case 191:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 37;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var10 = var12.ChatIcon;
case 218:
            return var10;
case 185:
            if(!var8) { _fun0003_ip = 219; continue _fun0003 }
case 220:
            if(!(var7 != var5)) { _fun0003_ip = 73; continue _fun0003 }
case 221:
            var8 = var5.ignoreTraits;
            if(var8) { _fun0003_ip = 219; continue _fun0003 }
case 73:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 31;
            var8 = var12[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var6);
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var8) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var8 = 61;
            var8 = var13[var8];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StageLockIcon;
            _fun0003_ip = 224; continue _fun0003;
case 222:
            var10 = 60;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var8 = var10.LockIcon;
case 224:
            _fun0003_ip = 96; continue _fun0003;
case 219:
            if(!var9) { _fun0003_ip = 225; continue _fun0003 }
case 226:
            if(!(var7 != var5)) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var9 = var5.ignoreTraits;
            if(var9) { _fun0003_ip = 225; continue _fun0003 }
case 227:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 60;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.LockIcon;
            _fun0003_ip = 229; continue _fun0003;
case 225:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var6);
            if(!var10) { _fun0003_ip = 230; continue _fun0003 }
case 231:
            if(!(var7 != var5)) { _fun0003_ip = 232; continue _fun0003 }
case 80:
            var10 = var5.ignoreTraits;
            if(var10) { _fun0003_ip = 230; continue _fun0003 }
case 232:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 61;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.StageLockIcon;
            _fun0003_ip = 233; continue _fun0003;
case 230:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 62;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var10 = var12.StageIcon;
case 233:
            var9 = var10;
case 229:
            var8 = var9;
case 96:
            return var8;
case 183:
            if(var4) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            if(!var2) { _fun0003_ip = 236; continue _fun0003 }
case 237:
            if(!(var7 != var5)) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var8 = var5.ignoreTraits;
            if(var8) { _fun0003_ip = 236; continue _fun0003 }
case 238:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 56;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AnnouncementsWarningIcon;
            _fun0003_ip = 108; continue _fun0003;
case 236:
            var9 = var6.isSpoilerChannel;
            var9 = var9.bind(var6)();
            if(!var9) { _fun0003_ip = 240; continue _fun0003 }
case 241:
            if(!(var7 != var5)) { _fun0003_ip = 242; continue _fun0003 }
case 100:
            var9 = var5.ignoreTraits;
            if(var9) { _fun0003_ip = 240; continue _fun0003 }
case 242:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 57;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.AnnouncementsSpoilerIcon;
            _fun0003_ip = 243; continue _fun0003;
case 240:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var6);
            if(!var10) { _fun0003_ip = 244; continue _fun0003 }
case 245:
            if(!(var7 != var5)) { _fun0003_ip = 246; continue _fun0003 }
case 247:
            var10 = var5.ignoreTraits;
            if(var10) { _fun0003_ip = 244; continue _fun0003 }
case 246:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 58;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.AnnouncementsLockIcon;
            _fun0003_ip = 248; continue _fun0003;
case 244:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 59;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var10 = var12.AnnouncementsIcon;
case 248:
            var9 = var10;
case 243:
            var8 = var9;
case 108:
            _fun0003_ip = 249; continue _fun0003;
case 234:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 41;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
case 249:
            return var8;
case 181:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 55;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AtIcon;
            return var8;
case 179:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 54;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.GroupIcon;
            return var8;
case 177:
            if(var4) { _fun0003_ip = 250; continue _fun0003 }
case 251:
            if(!var2) { _fun0003_ip = 252; continue _fun0003 }
case 253:
            if(!(var7 != var5)) { _fun0003_ip = 110; continue _fun0003 }
case 254:
            var8 = var5.ignoreTraits;
            if(var8) { _fun0003_ip = 252; continue _fun0003 }
case 110:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 47;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.ImageWarningIcon;
            _fun0003_ip = 255; continue _fun0003;
case 252:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 31;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.bind(var3)(var6);
            if(!var9) { _fun0003_ip = 256; continue _fun0003 }
case 257:
            if(!(var7 != var5)) { _fun0003_ip = 258; continue _fun0003 }
case 259:
            var9 = var5.ignoreTraits;
            if(var9) { _fun0003_ip = 256; continue _fun0003 }
case 258:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 50;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.ImageLockIcon;
            _fun0003_ip = 260; continue _fun0003;
case 256:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 52;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var9 = var10.ImageIcon;
case 260:
            var8 = var9;
case 255:
            _fun0003_ip = 261; continue _fun0003;
case 250:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 41;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
case 261:
            return var8;
case 175:
            if(var4) { _fun0003_ip = 262; continue _fun0003 }
case 263:
            if(!var2) { _fun0003_ip = 264; continue _fun0003 }
case 265:
            if(!(var7 != var5)) { _fun0003_ip = 266; continue _fun0003 }
case 267:
            var8 = var5.ignoreTraits;
            if(var8) { _fun0003_ip = 264; continue _fun0003 }
case 266:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var11) { _fun0003_ip = 268; continue _fun0003 }
case 269:
            var8 = 48;
            var8 = var12[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.ForumWarningIcon;
            _fun0003_ip = 270; continue _fun0003;
case 268:
            var9 = 47;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var8 = var9.ImageWarningIcon;
case 270:
            _fun0003_ip = 271; continue _fun0003;
case 264:
            var9 = var6.isSpoilerChannel;
            var9 = var9.bind(var6)();
            if(!var9) { _fun0003_ip = 272; continue _fun0003 }
case 273:
            if(!(var7 != var5)) { _fun0003_ip = 274; continue _fun0003 }
case 275:
            var9 = var5.ignoreTraits;
            if(var9) { _fun0003_ip = 272; continue _fun0003 }
case 274:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 49;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.ForumSpoilerIcon;
            _fun0003_ip = 162; continue _fun0003;
case 272:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var6);
            if(!var10) { _fun0003_ip = 276; continue _fun0003 }
case 277:
            if(!(var7 != var5)) { _fun0003_ip = 278; continue _fun0003 }
case 279:
            var10 = var5.ignoreTraits;
            if(var10) { _fun0003_ip = 276; continue _fun0003 }
case 278:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var11) { _fun0003_ip = 280; continue _fun0003 }
case 153:
            var10 = 51;
            var10 = var14[var10];
            var10 = var13.bind(var3)(var10);
            var10 = var10.ForumLockIcon;
            _fun0003_ip = 281; continue _fun0003;
case 280:
            var12 = 50;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var10 = var12.ImageLockIcon;
case 281:
            _fun0003_ip = 282; continue _fun0003;
case 276:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var11) { _fun0003_ip = 283; continue _fun0003 }
case 284:
            var11 = 53;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.ForumIcon;
            _fun0003_ip = 285; continue _fun0003;
case 283:
            var12 = 52;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.ImageIcon;
case 285:
            var10 = var11;
case 282:
            var9 = var10;
case 162:
            var8 = var9;
case 271:
            _fun0003_ip = 286; continue _fun0003;
case 262:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 41;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
case 286:
            return var8;
case 173:
            if(var4) { _fun0003_ip = 287; continue _fun0003 }
case 288:
            if(!var2) { _fun0003_ip = 289; continue _fun0003 }
case 163:
            if(!(var7 != var5)) { _fun0003_ip = 290; continue _fun0003 }
case 291:
            var2 = var5.ignoreTraits;
            if(var2) { _fun0003_ip = 289; continue _fun0003 }
case 290:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 42;
            var2 = var8[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.TextWarningIcon;
            _fun0003_ip = 292; continue _fun0003;
case 289:
            var4 = var6.isSpoilerChannel;
            var4 = var4.bind(var6)();
            if(!var4) { _fun0003_ip = 293; continue _fun0003 }
case 294:
            if(!(var7 != var5)) { _fun0003_ip = 295; continue _fun0003 }
case 296:
            var4 = var5.ignoreTraits;
            if(var4) { _fun0003_ip = 293; continue _fun0003 }
case 295:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 43;
            var4 = var9[var4];
            var4 = var8.bind(var3)(var4);
            var4 = var4.TextSpoilerIcon;
            _fun0003_ip = 297; continue _fun0003;
case 293:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 31;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.bind(var3)(var6);
            if(!var8) { _fun0003_ip = 298; continue _fun0003 }
case 299:
            if(!(var7 != var5)) { _fun0003_ip = 300; continue _fun0003 }
case 301:
            var5 = var5.ignoreTraits;
            if(var5) { _fun0003_ip = 298; continue _fun0003 }
case 300:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 44;
            var5 = var9[var5];
            var5 = var8.bind(var3)(var5);
            var5 = var5.TextLockIcon;
            _fun0003_ip = 302; continue _fun0003;
case 298:
            var6 = var6.linkedLobby;
            if(!(var7 == var6)) { _fun0003_ip = 303; continue _fun0003 }
case 304:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 46;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.TextIcon;
            _fun0003_ip = 305; continue _fun0003;
case 303:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 45;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var6 = var7.TextControllerIcon;
case 305:
            var5 = var6;
case 302:
            var4 = var5;
case 297:
            var2 = var4;
case 292:
            _fun0003_ip = 306; continue _fun0003;
case 287:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 41;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var2 = var4.BookCheckIcon;
case 306:
            return var2;
case 171:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 40;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.FolderIcon;
            return var2;
case 168:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 39;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadIcon;
            return var2;
case 166:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 38;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadLockIcon;
            return var2;
case 165:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 37;
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
    var7 = 68;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/native/ChannelUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getThreadChannelIcon'] = var6;
    var6 = function getSimpleChannelIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot7;
            var1 = var2.type;
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var5 = null;
            if(!(var5 == var1)) { _fun0004_ip = 307; continue _fun0004 }
case 308:
            var7 = var2.type;
            var6 = _closure1_slot6;
            var6 = var6.PRIVATE_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 309; continue _fun0004 }
case 310:
            var6 = _closure1_slot6;
            var6 = var6.ANNOUNCEMENT_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 309; continue _fun0004 }
case 311:
            var6 = _closure1_slot6;
            var6 = var6.PUBLIC_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 309; continue _fun0004 }
case 312:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_CATEGORY;
            if(!(var6 !== var7)) { _fun0004_ip = 313; continue _fun0004 }
case 314:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_TEXT;
            if(!(var6 !== var7)) { _fun0004_ip = 315; continue _fun0004 }
case 10:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_FORUM;
            if(!(var6 !== var7)) { _fun0004_ip = 315; continue _fun0004 }
case 316:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_MEDIA;
            if(!(var6 !== var7)) { _fun0004_ip = 315; continue _fun0004 }
case 317:
            var6 = _closure1_slot6;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var7)) { _fun0004_ip = 318; continue _fun0004 }
case 319:
            var6 = _closure1_slot6;
            var6 = var6.DM;
            if(!(var6 !== var7)) { _fun0004_ip = 320; continue _fun0004 }
case 321:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var7)) { _fun0004_ip = 322; continue _fun0004 }
case 323:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var7)) { _fun0004_ip = 324; continue _fun0004 }
case 325:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var7)) { _fun0004_ip = 22; continue _fun0004 }
case 174:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_DIRECTORY;
            if(!(var6 !== var7)) { _fun0004_ip = 326; continue _fun0004 }
case 327:
            return var5;
case 326:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 13;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 22:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 12;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 324:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 322:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 320:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 318:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 8;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 315:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 313:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 309:
            var3 = _closure1_slot7;
            var2 = var2.type;
            var2 = var3.bind(var4)(var2);
            return var2;
case 307:
            return var1;
        }
    };
    var3['getSimpleChannelIcon'] = var6;
    var6 = function getChannelIconWithGuild(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var3 = _closure1_slot8;
            var2 = {};
            var1 = null;
            var7 = var1 == var5;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0005_ip = 5; continue _fun0005 }
case 328:
            var6 = var5.rulesChannelId;
case 5:
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
case 0:
            var2 = arg1;
            var1 = 'voice';
            if(!(var1 !== var2)) { _fun0006_ip = 329; continue _fun0006 }
case 330:
            var1 = 'voice-locked';
            if(!(var1 !== var2)) { _fun0006_ip = 331; continue _fun0006 }
case 332:
            var1 = 'voice-nsfw';
            if(!(var1 !== var2)) { _fun0006_ip = 213; continue _fun0006 }
case 333:
            var1 = 'voice-spoiler';
            if(!(var1 !== var2)) { _fun0006_ip = 334; continue _fun0006 }
case 310:
            var1 = 'stage';
            if(!(var1 !== var2)) { _fun0006_ip = 208; continue _fun0006 }
case 335:
            var1 = 'stage-locked';
            if(!(var1 !== var2)) { _fun0006_ip = 336; continue _fun0006 }
case 337:
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0006_ip = 338; continue _fun0006 }
case 339:
            var1 = 'text-nsfw';
            if(!(var1 !== var2)) { _fun0006_ip = 340; continue _fun0006 }
case 341:
            var1 = 'text-spoiler';
            if(!(var1 !== var2)) { _fun0006_ip = 342; continue _fun0006 }
case 343:
            var1 = 'announcement';
            if(!(var1 !== var2)) { _fun0006_ip = 344; continue _fun0006 }
case 345:
            var1 = 'announcement-nsfw';
            if(!(var1 !== var2)) { _fun0006_ip = 346; continue _fun0006 }
case 316:
            var1 = 'announcement-spoiler';
            if(!(var1 !== var2)) { _fun0006_ip = 347; continue _fun0006 }
case 348:
            var1 = 'thread';
            if(!(var1 !== var2)) { _fun0006_ip = 307; continue _fun0006 }
case 349:
            var1 = 'post';
            if(!(var1 !== var2)) { _fun0006_ip = 38; continue _fun0006 }
case 350:
            var1 = 'message';
            if(!(var1 !== var2)) { _fun0006_ip = 38; continue _fun0006 }
case 14:
            var1 = 'forum';
            if(!(var1 !== var2)) { _fun0006_ip = 351; continue _fun0006 }
case 170:
            var1 = 'forum-nsfw';
            if(!(var1 !== var2)) { _fun0006_ip = 352; continue _fun0006 }
case 353:
            var1 = 'forum-spoiler';
            if(!(var1 !== var2)) { _fun0006_ip = 354; continue _fun0006 }
case 355:
            var1 = 'media';
            if(!(var1 !== var2)) { _fun0006_ip = 356; continue _fun0006 }
case 357:
            var1 = 'media-nsfw';
            if(!(var1 !== var2)) { _fun0006_ip = 358; continue _fun0006 }
case 359:
            var1 = 'locked';
            if(!(var1 !== var2)) { _fun0006_ip = 360; continue _fun0006 }
case 361:
            var1 = null;
            return var1;
case 360:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 28;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 358:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 27;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 356:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 26;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 354:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 25;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 352:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 351:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 38:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 307:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 347:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 346:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 344:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 342:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 340:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 338:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 336:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 208:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 334:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 213:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 331:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 329:
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
case 0:
            var4 = arg1;
            var5 = arg2;
            var3 = _closure1_slot9;
            var2 = {};
            var1 = null;
            var7 = var1 == var5;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0007_ip = 5; continue _fun0007 }
case 328:
            var6 = var5.rulesChannelId;
case 5:
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
case 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot6;
            var1 = var1.PRIVATE_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 362; continue _fun0008 }
case 328:
            var1 = _closure1_slot6;
            var1 = var1.ANNOUNCEMENT_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 362; continue _fun0008 }
case 363:
            var1 = _closure1_slot6;
            var1 = var1.PUBLIC_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 362; continue _fun0008 }
case 364:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_CATEGORY;
            if(!(var1 !== var4)) { _fun0008_ip = 365; continue _fun0008 }
case 366:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_TEXT;
            if(!(var1 !== var4)) { _fun0008_ip = 367; continue _fun0008 }
case 368:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_FORUM;
            if(!(var1 !== var4)) { _fun0008_ip = 369; continue _fun0008 }
case 370:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_MEDIA;
            if(!(var1 !== var4)) { _fun0008_ip = 371; continue _fun0008 }
case 372:
            var1 = _closure1_slot6;
            var1 = var1.GROUP_DM;
            if(!(var1 !== var4)) { _fun0008_ip = 373; continue _fun0008 }
case 374:
            var1 = _closure1_slot6;
            var1 = var1.DM;
            if(!(var1 !== var4)) { _fun0008_ip = 188; continue _fun0008 }
case 375:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_ANNOUNCEMENT;
            if(!(var1 !== var4)) { _fun0008_ip = 376; continue _fun0008 }
case 377:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var1 !== var4)) { _fun0008_ip = 378; continue _fun0008 }
case 379:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_VOICE;
            if(!(var1 !== var4)) { _fun0008_ip = 380; continue _fun0008 }
case 381:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_DIRECTORY;
            if(!(var1 !== var4)) { _fun0008_ip = 382; continue _fun0008 }
case 383:
            var1 = null;
            return var1;
case 382:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 67;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.HubIcon;
            return var1;
case 380:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 66;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.VoiceNormalIcon;
            return var1;
case 378:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 62;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.StageIcon;
            return var1;
case 376:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 59;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AnnouncementsIcon;
            return var1;
case 188:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 55;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AtIcon;
            return var1;
case 373:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 54;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.GroupIcon;
            return var1;
case 371:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 52;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ImageIcon;
            return var1;
case 369:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 53;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ForumIcon;
            return var1;
case 367:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 46;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.TextIcon;
            return var1;
case 365:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 40;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.FolderIcon;
            return var1;
case 362:
            var1 = var3.isForumPost;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var1) { _fun0008_ip = 384; continue _fun0008 }
case 385:
            var1 = 39;
            var2 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var1 = var1.ThreadIcon;
            _fun0008_ip = 386; continue _fun0008;
case 384:
            var2 = 37;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1 = var2.ChatIcon;
case 386:
            return var1;
        }
    };
    var3['getSimpleChannelIconComponent'] = var2;
    return var1;
})();