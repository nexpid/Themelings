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
            var6 = arg2;
            var8 = null;
            var1 = var6;
            if(!(var8 == var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = {};
case 7:
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
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = _closure1_slot7;
            var2 = var4.type;
            var2 = var5.bind(var3)(var2);
            if(!(var8 == var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = var4.isMediaChannel;
            var11 = var5.bind(var4)();
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
            return var8;
case 35:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 13;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            return var13;
case 33:
            if(var12) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            if(!var9) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            if(!(var8 != var6)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var12 = var6.ignoreTraits;
            if(var12) { _fun0002_ip = 39; continue _fun0002 }
case 41:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 23;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.bind(var3)(var4);
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var12) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var12 = 14;
            var12 = var15[var12];
            var12 = var14.bind(var3)(var12);
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var13 = 31;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
case 45:
            _fun0002_ip = 46; continue _fun0002;
case 39:
            if(!var10) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            if(!(var8 != var6)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var13 = var6.ignoreTraits;
            if(var13) { _fun0002_ip = 47; continue _fun0002 }
case 49:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 31;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            _fun0002_ip = 51; continue _fun0002;
case 47:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 23;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.bind(var3)(var4);
            if(!var14) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            if(!(var8 != var6)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var14 = var6.ignoreTraits;
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
            if(!(var8 != var6)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var15 = var6.ignoreTraits;
            if(var15) { _fun0002_ip = 57; continue _fun0002 }
case 59:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 32;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            _fun0002_ip = 61; continue _fun0002;
case 57:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 12;
            var16 = var18[var16];
            var15 = var17.bind(var3)(var16);
case 61:
            var14 = var15;
case 56:
            var13 = var14;
case 51:
            var12 = var13;
case 46:
            _fun0002_ip = 62; continue _fun0002;
case 37:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 16;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
case 62:
            return var12;
case 31:
            if(!var9) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            if(!(var8 != var6)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 63; continue _fun0002 }
case 65:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 23;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.bind(var3)(var4);
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var9) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var9 = 15;
            var9 = var14[var9];
            var9 = var13.bind(var3)(var9);
            _fun0002_ip = 69; continue _fun0002;
case 67:
            var12 = 31;
            var12 = var14[var12];
            var9 = var13.bind(var3)(var12);
case 69:
            _fun0002_ip = 70; continue _fun0002;
case 63:
            if(!var10) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            if(!(var8 != var6)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 71; continue _fun0002 }
case 73:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 75; continue _fun0002;
case 71:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 23;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.bind(var3)(var4);
            if(!var12) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            if(!(var8 != var6)) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var12 = var6.ignoreTraits;
            if(var12) { _fun0002_ip = 76; continue _fun0002 }
case 78:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 15;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            _fun0002_ip = 80; continue _fun0002;
case 76:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 11;
            var13 = var15[var13];
            var12 = var14.bind(var3)(var13);
case 80:
            var10 = var12;
case 75:
            var9 = var10;
case 70:
            return var9;
case 29:
            if(var7) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            if(!var5) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            if(!(var8 != var6)) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 83; continue _fun0002 }
case 85:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 29;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 87; continue _fun0002;
case 83:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 23;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            if(!(var8 != var6)) { _fun0002_ip = 90; continue _fun0002 }
case 91:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 88; continue _fun0002 }
case 90:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 30;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 92; continue _fun0002;
case 88:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 10;
            var12 = var14[var12];
            var10 = var13.bind(var3)(var12);
case 92:
            var9 = var10;
case 87:
            _fun0002_ip = 93; continue _fun0002;
case 81:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 21;
            var10 = var13[var10];
            var9 = var12.bind(var3)(var10);
case 93:
            return var9;
case 27:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 9;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            return var9;
case 25:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 8;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            return var9;
case 23:
            if(var7) { _fun0002_ip = 94; continue _fun0002 }
case 95:
            if(!var5) { _fun0002_ip = 96; continue _fun0002 }
case 97:
            if(!(var8 != var6)) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 96; continue _fun0002 }
case 98:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 25;
            var9 = var12[var9];
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 100; continue _fun0002;
case 96:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 23;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            if(!(var8 != var6)) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 101; continue _fun0002 }
case 103:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 27;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 105; continue _fun0002;
case 101:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 18;
            var12 = var14[var12];
            var10 = var13.bind(var3)(var12);
case 105:
            var9 = var10;
case 100:
            _fun0002_ip = 106; continue _fun0002;
case 94:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 21;
            var10 = var13[var10];
            var9 = var12.bind(var3)(var10);
case 106:
            return var9;
case 21:
            if(var7) { _fun0002_ip = 107; continue _fun0002 }
case 108:
            if(!var5) { _fun0002_ip = 109; continue _fun0002 }
case 110:
            if(!(var8 != var6)) { _fun0002_ip = 111; continue _fun0002 }
case 112:
            var9 = var6.ignoreTraits;
            if(var9) { _fun0002_ip = 109; continue _fun0002 }
case 111:
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var11) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var9 = 26;
            var9 = var13[var9];
            _fun0002_ip = 115; continue _fun0002;
case 113:
            var12 = 25;
            var9 = var13[var12];
case 115:
            var9 = var10.bind(var3)(var9);
            _fun0002_ip = 116; continue _fun0002;
case 109:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 23;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.bind(var3)(var4);
            if(!var10) { _fun0002_ip = 117; continue _fun0002 }
case 118:
            if(!(var8 != var6)) { _fun0002_ip = 119; continue _fun0002 }
case 120:
            var10 = var6.ignoreTraits;
            if(var10) { _fun0002_ip = 117; continue _fun0002 }
case 119:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var11) { _fun0002_ip = 121; continue _fun0002 }
case 122:
            var10 = 28;
            var10 = var14[var10];
            _fun0002_ip = 123; continue _fun0002;
case 121:
            var13 = 27;
            var10 = var14[var13];
case 123:
            var10 = var12.bind(var3)(var10);
            _fun0002_ip = 124; continue _fun0002;
case 117:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var11) { _fun0002_ip = 125; continue _fun0002 }
case 126:
            var11 = 17;
            var11 = var14[var11];
            _fun0002_ip = 127; continue _fun0002;
case 125:
            var13 = 18;
            var11 = var14[var13];
case 127:
            var10 = var12.bind(var3)(var11);
case 124:
            var9 = var10;
case 116:
            _fun0002_ip = 128; continue _fun0002;
case 107:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 21;
            var10 = var12[var10];
            var9 = var11.bind(var3)(var10);
case 128:
            return var9;
case 19:
            if(var7) { _fun0002_ip = 129; continue _fun0002 }
case 130:
            if(!var5) { _fun0002_ip = 131; continue _fun0002 }
case 132:
            if(!(var8 != var6)) { _fun0002_ip = 133; continue _fun0002 }
case 134:
            var5 = var6.ignoreTraits;
            if(var5) { _fun0002_ip = 131; continue _fun0002 }
case 133:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 22;
            var5 = var9[var5];
            var5 = var7.bind(var3)(var5);
            _fun0002_ip = 135; continue _fun0002;
case 131:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 23;
            var7 = var10[var7];
            var7 = var9.bind(var3)(var7);
            var7 = var7.bind(var3)(var4);
            if(!var7) { _fun0002_ip = 136; continue _fun0002 }
case 137:
            if(!(var8 != var6)) { _fun0002_ip = 138; continue _fun0002 }
case 139:
            var6 = var6.ignoreTraits;
            if(var6) { _fun0002_ip = 136; continue _fun0002 }
case 138:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 19;
            var6 = var9[var6];
            var6 = var7.bind(var3)(var6);
            _fun0002_ip = 140; continue _fun0002;
case 136:
            var7 = var4.linkedLobby;
            if(!(var8 == var7)) { _fun0002_ip = 141; continue _fun0002 }
case 142:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            _fun0002_ip = 143; continue _fun0002;
case 141:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 24;
            var8 = var10[var8];
            var7 = var9.bind(var3)(var8);
case 143:
            var6 = var7;
case 140:
            var5 = var6;
case 135:
            _fun0002_ip = 144; continue _fun0002;
case 129:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var5 = var7.bind(var3)(var6);
case 144:
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
            var1 = 16;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function getChannelIconComponent(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var6 = null;
            var1 = var4;
            if(!(var6 == var1)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = {};
case 7:
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
            if(var2) { _fun0003_ip = 145; continue _fun0003 }
case 10:
            var2 = var5.isMediaChannel;
            var10 = var2.bind(var5)();
            var2 = var5.isNSFW;
            var2 = var2.bind(var5)();
            var13 = var5.type;
            var12 = _closure1_slot6;
            var12 = var12.PRIVATE_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var12 = _closure1_slot6;
            var12 = var12.ANNOUNCEMENT_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 148; continue _fun0003 }
case 149:
            var12 = _closure1_slot6;
            var12 = var12.PUBLIC_THREAD;
            if(!(var12 !== var13)) { _fun0003_ip = 148; continue _fun0003 }
case 150:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_CATEGORY;
            if(!(var12 !== var13)) { _fun0003_ip = 151; continue _fun0003 }
case 152:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_TEXT;
            if(!(var12 !== var13)) { _fun0003_ip = 153; continue _fun0003 }
case 154:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_FORUM;
            if(!(var12 !== var13)) { _fun0003_ip = 121; continue _fun0003 }
case 155:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_MEDIA;
            if(!(var12 !== var13)) { _fun0003_ip = 156; continue _fun0003 }
case 157:
            var12 = _closure1_slot6;
            var12 = var12.GROUP_DM;
            if(!(var12 !== var13)) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var12 = _closure1_slot6;
            var12 = var12.DM;
            if(!(var12 !== var13)) { _fun0003_ip = 160; continue _fun0003 }
case 161:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_ANNOUNCEMENT;
            if(!(var12 !== var13)) { _fun0003_ip = 162; continue _fun0003 }
case 163:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 164; continue _fun0003 }
case 165:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var13)) { _fun0003_ip = 166; continue _fun0003 }
case 167:
            var12 = _closure1_slot6;
            var12 = var12.GUILD_DIRECTORY;
            if(!(var12 !== var13)) { _fun0003_ip = 168; continue _fun0003 }
case 169:
            return var3;
case 168:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 59;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.HubIcon;
            return var12;
case 166:
            if(var11) { _fun0003_ip = 170; continue _fun0003 }
case 171:
            if(!var8) { _fun0003_ip = 172; continue _fun0003 }
case 173:
            if(!(var6 != var4)) { _fun0003_ip = 174; continue _fun0003 }
case 175:
            var11 = var4.ignoreTraits;
            if(var11) { _fun0003_ip = 172; continue _fun0003 }
case 174:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 23;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.bind(var3)(var5);
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var11) { _fun0003_ip = 176; continue _fun0003 }
case 177:
            var11 = 56;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.VoiceLockIcon;
            _fun0003_ip = 178; continue _fun0003;
case 176:
            var12 = 53;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.LockIcon;
case 178:
            _fun0003_ip = 179; continue _fun0003;
case 172:
            if(!var9) { _fun0003_ip = 180; continue _fun0003 }
case 39:
            if(!(var6 != var4)) { _fun0003_ip = 181; continue _fun0003 }
case 182:
            var12 = var4.ignoreTraits;
            if(var12) { _fun0003_ip = 180; continue _fun0003 }
case 181:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 53;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.LockIcon;
            _fun0003_ip = 183; continue _fun0003;
case 180:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 23;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.bind(var3)(var5);
            if(!var13) { _fun0003_ip = 184; continue _fun0003 }
case 185:
            if(!(var6 != var4)) { _fun0003_ip = 186; continue _fun0003 }
case 187:
            var13 = var4.ignoreTraits;
            if(var13) { _fun0003_ip = 184; continue _fun0003 }
case 186:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 56;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.VoiceLockIcon;
            _fun0003_ip = 188; continue _fun0003;
case 184:
            if(!var2) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            if(!(var6 != var4)) { _fun0003_ip = 191; continue _fun0003 }
case 59:
            var14 = var4.ignoreTraits;
            if(var14) { _fun0003_ip = 189; continue _fun0003 }
case 191:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 57;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.VoiceWarningIcon;
            _fun0003_ip = 192; continue _fun0003;
case 189:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 58;
            var15 = var17[var15];
            var15 = var16.bind(var3)(var15);
            var14 = var15.VoiceNormalIcon;
case 192:
            var13 = var14;
case 188:
            var12 = var13;
case 183:
            var11 = var12;
case 179:
            _fun0003_ip = 193; continue _fun0003;
case 170:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 33;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.ChatIcon;
case 193:
            return var11;
case 164:
            if(!var8) { _fun0003_ip = 194; continue _fun0003 }
case 195:
            if(!(var6 != var4)) { _fun0003_ip = 196; continue _fun0003 }
case 197:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 194; continue _fun0003 }
case 196:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 23;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var8) { _fun0003_ip = 73; continue _fun0003 }
case 198:
            var8 = 54;
            var8 = var13[var8];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StageLockIcon;
            _fun0003_ip = 199; continue _fun0003;
case 73:
            var11 = 53;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var8 = var11.LockIcon;
case 199:
            _fun0003_ip = 200; continue _fun0003;
case 194:
            if(!var9) { _fun0003_ip = 201; continue _fun0003 }
case 202:
            if(!(var6 != var4)) { _fun0003_ip = 203; continue _fun0003 }
case 204:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 201; continue _fun0003 }
case 203:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 53;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.LockIcon;
            _fun0003_ip = 205; continue _fun0003;
case 201:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 23;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.bind(var3)(var5);
            if(!var11) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            if(!(var6 != var4)) { _fun0003_ip = 75; continue _fun0003 }
case 208:
            var11 = var4.ignoreTraits;
            if(var11) { _fun0003_ip = 206; continue _fun0003 }
case 75:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 54;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.StageLockIcon;
            _fun0003_ip = 209; continue _fun0003;
case 206:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 55;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var11 = var12.StageIcon;
case 209:
            var9 = var11;
case 205:
            var8 = var9;
case 200:
            return var8;
case 162:
            if(var7) { _fun0003_ip = 97; continue _fun0003 }
case 210:
            if(!var2) { _fun0003_ip = 88; continue _fun0003 }
case 211:
            if(!(var6 != var4)) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 88; continue _fun0003 }
case 212:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 50;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AnnouncementsWarningIcon;
            _fun0003_ip = 214; continue _fun0003;
case 88:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 23;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 25; continue _fun0003 }
case 215:
            if(!(var6 != var4)) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 25; continue _fun0003 }
case 216:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 51;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.AnnouncementsLockIcon;
            _fun0003_ip = 218; continue _fun0003;
case 25:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 52;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.AnnouncementsIcon;
case 218:
            var8 = var9;
case 214:
            _fun0003_ip = 219; continue _fun0003;
case 97:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 37;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
case 219:
            return var8;
case 160:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 49;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.AtIcon;
            return var8;
case 158:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 48;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.GroupIcon;
            return var8;
case 156:
            if(var7) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            if(!var2) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            if(!(var6 != var4)) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 222; continue _fun0003 }
case 224:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 42;
            var8 = var11[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.ImageWarningIcon;
            _fun0003_ip = 226; continue _fun0003;
case 222:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 23;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            if(!(var6 != var4)) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 227; continue _fun0003 }
case 229:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 44;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.ImageLockIcon;
            _fun0003_ip = 118; continue _fun0003;
case 227:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 46;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.ImageIcon;
case 118:
            var8 = var9;
case 226:
            _fun0003_ip = 231; continue _fun0003;
case 220:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 37;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
case 231:
            return var8;
case 121:
            if(var7) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            if(!var2) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            if(!(var6 != var4)) { _fun0003_ip = 236; continue _fun0003 }
case 237:
            var8 = var4.ignoreTraits;
            if(var8) { _fun0003_ip = 234; continue _fun0003 }
case 236:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var10) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var8 = 43;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.ForumWarningIcon;
            _fun0003_ip = 128; continue _fun0003;
case 238:
            var9 = 42;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var8 = var9.ImageWarningIcon;
case 128:
            _fun0003_ip = 240; continue _fun0003;
case 234:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 23;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var5);
            if(!var9) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            if(!(var6 != var4)) { _fun0003_ip = 131; continue _fun0003 }
case 243:
            var9 = var4.ignoreTraits;
            if(var9) { _fun0003_ip = 241; continue _fun0003 }
case 131:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var10) { _fun0003_ip = 244; continue _fun0003 }
case 245:
            var9 = 45;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.ForumLockIcon;
            _fun0003_ip = 246; continue _fun0003;
case 244:
            var11 = 44;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var9 = var11.ImageLockIcon;
case 246:
            _fun0003_ip = 247; continue _fun0003;
case 241:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            if(var10) { _fun0003_ip = 248; continue _fun0003 }
case 249:
            var10 = 47;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.ForumIcon;
            _fun0003_ip = 250; continue _fun0003;
case 248:
            var11 = 46;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var10 = var11.ImageIcon;
case 250:
            var9 = var10;
case 247:
            var8 = var9;
case 240:
            _fun0003_ip = 251; continue _fun0003;
case 232:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 37;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var8 = var9.BookCheckIcon;
case 251:
            return var8;
case 153:
            if(var7) { _fun0003_ip = 252; continue _fun0003 }
case 253:
            if(!var2) { _fun0003_ip = 254; continue _fun0003 }
case 17:
            if(!(var6 != var4)) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var2 = var4.ignoreTraits;
            if(var2) { _fun0003_ip = 254; continue _fun0003 }
case 255:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 38;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.TextWarningIcon;
            _fun0003_ip = 257; continue _fun0003;
case 254:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 23;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.bind(var3)(var5);
            if(!var7) { _fun0003_ip = 258; continue _fun0003 }
case 259:
            if(!(var6 != var4)) { _fun0003_ip = 260; continue _fun0003 }
case 261:
            var4 = var4.ignoreTraits;
            if(var4) { _fun0003_ip = 258; continue _fun0003 }
case 260:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 39;
            var4 = var8[var4];
            var4 = var7.bind(var3)(var4);
            var4 = var4.TextLockIcon;
            _fun0003_ip = 262; continue _fun0003;
case 258:
            var5 = var5.linkedLobby;
            if(!(var6 == var5)) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 41;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.TextIcon;
            _fun0003_ip = 265; continue _fun0003;
case 263:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 40;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var5 = var6.TextControllerIcon;
case 265:
            var4 = var5;
case 262:
            var2 = var4;
case 257:
            _fun0003_ip = 266; continue _fun0003;
case 252:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 37;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var2 = var4.BookCheckIcon;
case 266:
            return var2;
case 151:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 36;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.FolderIcon;
            return var2;
case 148:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 35;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadIcon;
            return var2;
case 146:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 34;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ThreadLockIcon;
            return var2;
case 145:
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
case 0:
            var2 = arg1;
            var5 = _closure1_slot7;
            var1 = var2.type;
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var5 = null;
            if(!(var5 == var1)) { _fun0004_ip = 267; continue _fun0004 }
case 268:
            var7 = var2.type;
            var6 = _closure1_slot6;
            var6 = var6.PRIVATE_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 269; continue _fun0004 }
case 270:
            var6 = _closure1_slot6;
            var6 = var6.ANNOUNCEMENT_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 269; continue _fun0004 }
case 271:
            var6 = _closure1_slot6;
            var6 = var6.PUBLIC_THREAD;
            if(!(var6 !== var7)) { _fun0004_ip = 269; continue _fun0004 }
case 272:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_CATEGORY;
            if(!(var6 !== var7)) { _fun0004_ip = 273; continue _fun0004 }
case 274:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_TEXT;
            if(!(var6 !== var7)) { _fun0004_ip = 275; continue _fun0004 }
case 10:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_FORUM;
            if(!(var6 !== var7)) { _fun0004_ip = 275; continue _fun0004 }
case 276:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_MEDIA;
            if(!(var6 !== var7)) { _fun0004_ip = 275; continue _fun0004 }
case 277:
            var6 = _closure1_slot6;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var7)) { _fun0004_ip = 278; continue _fun0004 }
case 279:
            var6 = _closure1_slot6;
            var6 = var6.DM;
            if(!(var6 !== var7)) { _fun0004_ip = 280; continue _fun0004 }
case 281:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var7)) { _fun0004_ip = 282; continue _fun0004 }
case 283:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var7)) { _fun0004_ip = 284; continue _fun0004 }
case 285:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var7)) { _fun0004_ip = 22; continue _fun0004 }
case 154:
            var6 = _closure1_slot6;
            var6 = var6.GUILD_DIRECTORY;
            if(!(var6 !== var7)) { _fun0004_ip = 286; continue _fun0004 }
case 287:
            return var5;
case 286:
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
case 284:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 282:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 280:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 278:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 8;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 275:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 273:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            return var5;
case 269:
            var3 = _closure1_slot7;
            var2 = var2.type;
            var2 = var3.bind(var4)(var2);
            return var2;
case 267:
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
case 288:
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
            if(!(var1 !== var2)) { _fun0006_ip = 289; continue _fun0006 }
case 290:
            var1 = 'voice-locked';
            if(!(var1 !== var2)) { _fun0006_ip = 280; continue _fun0006 }
case 291:
            var1 = 'stage';
            if(!(var1 !== var2)) { _fun0006_ip = 292; continue _fun0006 }
case 293:
            var1 = 'stage-locked';
            if(!(var1 !== var2)) { _fun0006_ip = 294; continue _fun0006 }
case 295:
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0006_ip = 296; continue _fun0006 }
case 297:
            var1 = 'thread';
            if(!(var1 !== var2)) { _fun0006_ip = 298; continue _fun0006 }
case 299:
            var1 = 'post';
            if(!(var1 !== var2)) { _fun0006_ip = 300; continue _fun0006 }
case 301:
            var1 = 'message';
            if(!(var1 !== var2)) { _fun0006_ip = 300; continue _fun0006 }
case 302:
            var1 = 'forum';
            if(!(var1 !== var2)) { _fun0006_ip = 303; continue _fun0006 }
case 304:
            var1 = 'media';
            if(!(var1 !== var2)) { _fun0006_ip = 305; continue _fun0006 }
case 306:
            var1 = 'locked';
            if(!(var1 !== var2)) { _fun0006_ip = 307; continue _fun0006 }
case 308:
            var1 = null;
            return var1;
case 307:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 305:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 303:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 300:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 298:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 296:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 294:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 292:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 280:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 289:
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
case 288:
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
            if(!(var1 !== var4)) { _fun0008_ip = 309; continue _fun0008 }
case 288:
            var1 = _closure1_slot6;
            var1 = var1.ANNOUNCEMENT_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 309; continue _fun0008 }
case 310:
            var1 = _closure1_slot6;
            var1 = var1.PUBLIC_THREAD;
            if(!(var1 !== var4)) { _fun0008_ip = 309; continue _fun0008 }
case 297:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_CATEGORY;
            if(!(var1 !== var4)) { _fun0008_ip = 311; continue _fun0008 }
case 312:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_TEXT;
            if(!(var1 !== var4)) { _fun0008_ip = 313; continue _fun0008 }
case 314:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_FORUM;
            if(!(var1 !== var4)) { _fun0008_ip = 315; continue _fun0008 }
case 316:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_MEDIA;
            if(!(var1 !== var4)) { _fun0008_ip = 317; continue _fun0008 }
case 318:
            var1 = _closure1_slot6;
            var1 = var1.GROUP_DM;
            if(!(var1 !== var4)) { _fun0008_ip = 319; continue _fun0008 }
case 320:
            var1 = _closure1_slot6;
            var1 = var1.DM;
            if(!(var1 !== var4)) { _fun0008_ip = 167; continue _fun0008 }
case 321:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_ANNOUNCEMENT;
            if(!(var1 !== var4)) { _fun0008_ip = 322; continue _fun0008 }
case 323:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var1 !== var4)) { _fun0008_ip = 324; continue _fun0008 }
case 325:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_VOICE;
            if(!(var1 !== var4)) { _fun0008_ip = 326; continue _fun0008 }
case 327:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_DIRECTORY;
            if(!(var1 !== var4)) { _fun0008_ip = 298; continue _fun0008 }
case 328:
            var1 = null;
            return var1;
case 298:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 59;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.HubIcon;
            return var1;
case 326:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 58;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.VoiceNormalIcon;
            return var1;
case 324:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 55;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.StageIcon;
            return var1;
case 322:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 52;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AnnouncementsIcon;
            return var1;
case 167:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 49;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AtIcon;
            return var1;
case 319:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 48;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.GroupIcon;
            return var1;
case 317:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 46;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ImageIcon;
            return var1;
case 315:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 47;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ForumIcon;
            return var1;
case 313:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 41;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.TextIcon;
            return var1;
case 311:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 36;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.FolderIcon;
            return var1;
case 309:
            var1 = var3.isForumPost;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var1) { _fun0008_ip = 329; continue _fun0008 }
case 330:
            var1 = 35;
            var2 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var1 = var1.ThreadIcon;
            _fun0008_ip = 331; continue _fun0008;
case 329:
            var2 = 33;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1 = var2.ChatIcon;
case 331:
            return var1;
        }
    };
    var3['getSimpleChannelIconComponent'] = var2;
    return var1;
})();