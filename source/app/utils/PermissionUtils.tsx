// app/utils/PermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var17 = metroImportDefault;
    var15 = metroImportAll;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var15;
    var _closure1_slot3 = var14;
    var1 = function calculateElevatedPermissions(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = arguments[3];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = true;
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = arg2;
            var3 = var1.mfaLevel;
            var1 = _closure1_slot20;
            var1 = var1.ELEVATED;
            var2 = var3 === var1;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot12;
            var1 = var3.getId;
            var3 = var1.bind(var3)();
            var1 = arg3;
            var2 = var1 === var3;
case 6:
            var1 = var6;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot17;
            var2 = var4.getCurrentUser;
            var2 = var2.bind(var4)();
            var4 = null;
            var4 = var4 != var2;
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var2.mfaEnabled;
case 10:
            var2 = var6;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot2;
            var8 = _closure1_slot3;
            var4 = 13;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.remove;
            var3 = _closure1_slot19;
            var2 = var4.bind(var5)(var6, var3);
case 12:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function applyOverwrites(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg2;
            var12 = arg3;
            var5 = arg4;
            var1 = arg1;
            var1 = var5[var1];
            var4 = null;
            var14 = var12;
            if(!(var4 != var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var2 = 13;
            var6 = var8[var2];
            var3 = undefined;
            var11 = var7.bind(var3)(var6);
            var10 = var11.remove;
            var6 = var1.deny;
            var6 = var10.bind(var11)(var12, var6);
            var2 = var8[var2];
            var3 = var7.bind(var3)(var2);
            var2 = var3.add;
            var1 = var1.allow;
            var14 = var2.bind(var3)(var6, var1);
case 14:
            var1 = var14;
            if(!(var4 != var9)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var10 = _closure1_slot23;
            var3 = var9.roles;
            var3 = var3.length;
            var12 = 0;
            var3 = var12 < var3;
            var7 = 13;
            var6 = undefined;
            var8 = var10;
            var11 = var8;
            var13 = var11;
            if(!var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = var9.roles;
            var3 = var3[var12];
            var3 = var5[var3];
            var16 = var10;
            var15 = var8;
            if(!(var4 != var3)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var19 = _closure1_slot2;
            var18 = _closure1_slot3;
            var17 = var18[var7];
            var21 = var19.bind(var6)(var17);
            var20 = var21.add;
            var17 = var3.allow;
            var16 = var20.bind(var21)(var10, var17);
            var18 = var18[var7];
            var19 = var19.bind(var6)(var18);
            var18 = var19.add;
            var3 = var3.deny;
            var15 = var18.bind(var19)(var8, var3);
case 20:
            var12 = var12 + 1;
            var3 = var9.roles;
            var3 = var3.length;
            var10 = var16;
            var8 = var15;
            var11 = var10;
            var13 = var8;
            if(var12 < var3) { _fun0002_ip = 19; continue _fun0002 }
case 18:
            var8 = _closure1_slot2;
            var3 = _closure1_slot3;
            var10 = var3[var7];
            var12 = var8.bind(var6)(var10);
            var10 = var12.remove;
            var10 = var10.bind(var12)(var14, var13);
            var3 = var3[var7];
            var8 = var8.bind(var6)(var3);
            var3 = var8.add;
            var13 = var3.bind(var8)(var10, var11);
            var3 = var9.userId;
            var3 = var5[var3];
            var5 = var13;
            if(!(var4 != var3)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = _closure1_slot2;
            var4 = _closure1_slot3;
            var10 = var4[var7];
            var12 = var8.bind(var6)(var10);
            var11 = var12.remove;
            var10 = var3.deny;
            var10 = var11.bind(var12)(var13, var10);
            var4 = var4[var7];
            var8 = var8.bind(var6)(var4);
            var4 = var8.add;
            var3 = var3.allow;
            var5 = var4.bind(var8)(var10, var3);
case 22:
            var4 = _closure1_slot2;
            var10 = _closure1_slot3;
            var3 = var10[var7];
            var8 = var4.bind(var6)(var3);
            var4 = var8.has;
            var3 = _closure1_slot18;
            var3 = var3.ADMINISTRATOR;
            var4 = var4.bind(var8)(var5, var3);
            var8 = _closure1_slot0;
            var3 = 15;
            var3 = var10[var3];
            var8 = var8.bind(var6)(var3);
            var3 = var8.hasAutomodQuarantinedProfile;
            var3 = var3.bind(var8)(var9);
            var11 = var5;
            if(!var3) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = !var4;
case 24:
            var5 = var11;
            if(!var3) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var8 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var10 = var8.bind(var6)(var3);
            var8 = var10.filter;
            var3 = _closure1_slot29;
            var5 = var8.bind(var10)(var11, var3);
case 26:
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var3 = 16;
            var3 = var10[var3];
            var8 = var8.bind(var6)(var3);
            var3 = var8.isMemberCommunicationDisabled;
            var3 = var3.bind(var8)(var9);
            if(!var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var3 = !var4;
case 28:
            var1 = var5;
            if(!var3) { _fun0002_ip = 16; continue _fun0002 }
case 30:
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = var4.filter;
            var2 = _closure1_slot28;
            var1 = var3.bind(var4)(var5, var2);
case 16:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function computePermissionsForMember(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var8 = var9.userId;
            var6 = var9.member;
            var2 = var9.guild;
            var5 = var9.overwrites;
            var3 = var9.roles;
            var7 = var9.checkElevated;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0003_ip = 31; continue _fun0003 }
case 4:
            var7 = true;
case 31:
            var1 = var9.excludeGuildPermissions;
            if(!(var1 === var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var1 = false;
case 32:
            var13 = var9.lurkerPermissionsMask;
            if(!(var13 === var4)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var13 = _closure1_slot26;
case 34:
            if(var1) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var9 = null;
            if(!(var9 == var3)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var11 = _closure1_slot15;
            var10 = var11.getUnsafeMutableRoles;
            var1 = var2.id;
            var15 = var10.bind(var11)(var1);
            _fun0003_ip = 40; continue _fun0003;
case 38:
            var1 = {};
            var12 = _closure1_slot15;
            var11 = var12.getUnsafeMutableRoles;
            var10 = var2.id;
            var21 = var11.bind(var12)(var10);
            var22 = var1;
            var10 = copyDataProperties(var22, var21);
            var22 = var1;
            var21 = var3;
            var3 = copyDataProperties(var22, var21);
            var15 = var1;
case 40:
            var3 = _closure1_slot9;
            var3 = var3.bind(var4)(var2);
            var3 = var15[var3];
            if(!(var9 == var3)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var16 = _closure1_slot25;
            _fun0003_ip = 43; continue _fun0003;
case 41:
            var16 = var3.permissions;
case 43:
            var10 = var16;
            if(!(var9 != var6)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var3 = var6.roles;
            var3 = var3.length;
            var14 = 0;
            var3 = var14 < var3;
            var12 = 13;
            var11 = var16;
            var10 = var11;
            if(!var3) { _fun0003_ip = 44; continue _fun0003 }
case 46:
            var3 = var6.roles;
            var3 = var3[var14];
            var3 = var15[var3];
            var16 = var11;
            if(!(var4 !== var3)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var18 = _closure1_slot2;
            var17 = _closure1_slot3;
            var17 = var17[var12];
            var18 = var18.bind(var4)(var17);
            var17 = var18.add;
            var3 = var3.permissions;
            var16 = var17.bind(var18)(var11, var3);
case 47:
            var14 = var14 + 1;
            var3 = var6.roles;
            var3 = var3.length;
            var11 = var16;
            var10 = var11;
            if(var14 < var3) { _fun0003_ip = 46; continue _fun0003 }
case 44:
            var12 = _closure1_slot2;
            var3 = _closure1_slot3;
            var11 = 13;
            var3 = var3[var11];
            var14 = var12.bind(var4)(var3);
            var12 = var14.has;
            var3 = _closure1_slot18;
            var3 = var3.ADMINISTRATOR;
            var3 = var12.bind(var14)(var10, var3);
            var12 = var10;
            if(var3) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var10 = _closure1_slot31;
            var22 = var2.id;
            var23 = undefined;
            var21 = var6;
            var20 = var12;
            var19 = var5;
            var10 = var23[var10](var22, var21, var20, var19, var18);
            _fun0003_ip = 51; continue _fun0003;
case 49:
            var10 = _closure1_slot24;
case 51:
            var14 = _closure1_slot5;
            var12 = var14.isLurking;
            var3 = var2.id;
            var3 = var12.bind(var14)(var3);
            if(var3) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var9 = var9 != var6;
            if(!var9) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var9 = var6.isPending;
case 54:
            var3 = var9;
case 52:
            var12 = var10;
            if(!var3) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var9 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var11];
            var9 = var9.bind(var4)(var3);
            var3 = var9.filter;
            var12 = var3.bind(var9)(var10, var13);
case 56:
            var10 = _closure1_slot14;
            var9 = var10.isCurrentUserGuest;
            var3 = var2.id;
            var9 = var9.bind(var10)(var3);
            var3 = var12;
            if(!var9) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var10 = _closure1_slot2;
            var9 = _closure1_slot3;
            var9 = var9[var11];
            var11 = var10.bind(var4)(var9);
            var10 = var11.filter;
            var9 = _closure1_slot27;
            var3 = var10.bind(var11)(var12, var9);
case 58:
            var1 = _closure1_slot30;
            var23 = undefined;
            var22 = var3;
            var21 = var2;
            var20 = var8;
            var19 = var7;
            var1 = var23[var1](var22, var21, var20, var19, var18);
            return var1;
case 36:
            var3 = _closure1_slot31;
            var22 = var2.id;
            var20 = _closure1_slot23;
            var23 = undefined;
            var21 = var6;
            var19 = var5;
            var1 = var23[var3](var22, var21, var20, var19, var18);
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var7 = function computePermissions(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var13 = var1.user;
            var6 = var1.context;
            var11 = var1.overwrites;
            var10 = var1.roles;
            var9 = var1.checkElevated;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var9 = true;
case 60:
            var8 = var1.excludeGuildPermissions;
            if(!(var8 === var5)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var8 = false;
case 62:
            var2 = null;
            if(!(var2 != var13)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var4 = 'string';
            var1 = typeof var13;
            var3 = var13;
            if(!(var4 !== var1)) { _fun0004_ip = 66; continue _fun0004 }
case 34:
            var3 = var13.id;
case 66:
            var4 = _closure1_slot26;
            var7 = _closure1_slot8;
            var7 = var6 instanceof var7;
            if(var7) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var15 = var11;
            if(!(var2 == var15)) { _fun0004_ip = 69; continue _fun0004 }
case 17:
            var15 = {};
case 69:
            var16 = var6;
            var14 = var4;
            _fun0004_ip = 70; continue _fun0004;
case 67:
            var7 = var6.isScheduledForDeletion;
            var7 = var7.bind(var6)();
            if(var7) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var17 = _closure1_slot7;
            var12 = var17.has;
            var7 = var6.type;
            var7 = var12.bind(var17)(var7);
            if(var7) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var7 = var6.computeLurkerPermissionsAllowList;
            var7 = var7.bind(var6)();
            if(!(var2 != var7)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var4 = var7;
case 75:
            if(!(var2 == var11)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var12 = var6.permissionOverwrites;
            _fun0004_ip = 79; continue _fun0004;
case 77:
            var7 = {};
            var22 = var6.permissionOverwrites;
            var23 = var7;
            var17 = copyDataProperties(var23, var22);
            var23 = var7;
            var22 = var11;
            var17 = copyDataProperties(var23, var22);
            var12 = var7;
case 79:
            var7 = var6.getGuildId;
            var19 = var7.bind(var6)();
            var17 = var2 != var19;
            var7 = null;
            if(!var17) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var18 = _closure1_slot16;
            var17 = var18.getGuild;
            var7 = var17.bind(var18)(var19);
case 80:
            var16 = var7;
            var15 = var12;
            var14 = var4;
case 70:
            if(!(var2 != var16)) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var7 = _closure1_slot17;
            var4 = var7.getCurrentUser;
            var7 = var4.bind(var7)();
            var12 = var2 == var7;
            var4 = undefined;
            if(var12) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var4 = var7.id;
case 84:
            if(!(var3 === var4)) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var12 = _closure1_slot4;
            var7 = var12.isViewingRoles;
            var4 = var16.id;
            var4 = var7.bind(var12)(var4);
            if(var4) { _fun0004_ip = 88; continue _fun0004 }
case 86:
            var4 = _closure1_slot10;
            var4 = var4.bind(var5)(var16, var3);
            if(!var4) { _fun0004_ip = 88; continue _fun0004 }
case 89:
            var7 = _closure1_slot30;
            var23 = _closure1_slot24;
            var24 = undefined;
            var22 = var16;
            var21 = var3;
            var20 = var9;
            var4 = var24[var7](var23, var22, var21, var20, var19);
            _fun0004_ip = 90; continue _fun0004;
case 88:
            var12 = _closure1_slot32;
            var7 = {};
            var7['userId'] = var3;
            var19 = _closure1_slot14;
            var18 = var19.getMember;
            var17 = var16.id;
            var17 = var18.bind(var19)(var17, var3);
            var7['member'] = var17;
            var7['guild'] = var16;
            var7['overwrites'] = var15;
            var7['roles'] = var10;
            var7['checkElevated'] = var9;
            var7['excludeGuildPermissions'] = var8;
            var7['lurkerPermissionsMask'] = var14;
            var4 = var12.bind(var5)(var7);
case 90:
            _fun0004_ip = 91; continue _fun0004;
case 82:
            var4 = _closure1_slot23;
case 91:
            return var4;
case 73:
            var12 = _closure1_slot13;
            var7 = var12.getChannel;
            var4 = var6.parent_id;
            var12 = var7.bind(var12)(var4);
            if(!(var2 != var12)) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var4 = var12.isScheduledForDeletion;
            var4 = var4.bind(var12)();
            if(var4) { _fun0004_ip = 92; continue _fun0004 }
case 94:
            var7 = _closure1_slot17;
            var4 = var7.getCurrentUser;
            var4 = var4.bind(var7)();
            var7 = var2 == var4;
            var2 = undefined;
            if(var7) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var2 = var4.id;
case 95:
            var4 = var3 === var2;
            if(!var4) { _fun0004_ip = 97; continue _fun0004 }
case 98:
            var7 = _closure1_slot6;
            var3 = var7.hasJoined;
            var2 = var6.id;
            var4 = var3.bind(var7)(var2);
case 97:
            var3 = _closure1_slot34;
            var7 = _closure1_slot33;
            var2 = {};
            var2['user'] = var13;
            var2['context'] = var12;
            var2['overwrites'] = var11;
            var2['roles'] = var10;
            var2['checkElevated'] = var9;
            var2['excludeGuildPermissions'] = var8;
            var2 = var7.bind(var5)(var2);
            var2 = var3.bind(var5)(var6, var2, var4);
            return var2;
case 92:
            var2 = _closure1_slot23;
            return var2;
case 71:
            var1 = _closure1_slot23;
            return var1;
case 64:
            var1 = _closure1_slot23;
            return var1;
        }
    };
    var _closure1_slot33 = var7;
    var6 = function applyThreadPermissions(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var2 = var5.type;
            var1 = _closure1_slot21;
            var1 = var1.PRIVATE_THREAD;
            if(!(var2 === var1)) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var1 = arg3;
            if(var1) { _fun0005_ip = 99; continue _fun0005 }
case 101:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.has;
            var1 = _closure1_slot18;
            var1 = var1.MANAGE_THREADS;
            var1 = var2.bind(var3)(var7, var1);
            if(var1) { _fun0005_ip = 99; continue _fun0005 }
case 37:
            var1 = _closure1_slot23;
            _fun0005_ip = 102; continue _fun0005;
case 99:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var9 = 13;
            var2 = var2[var9];
            var8 = undefined;
            var6 = var3.bind(var8)(var2);
            var3 = var6.has;
            var2 = _closure1_slot18;
            var2 = var2.SEND_MESSAGES_IN_THREADS;
            var2 = var3.bind(var6)(var7, var2);
            if(var2) { _fun0005_ip = 78; continue _fun0005 }
case 103:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var9];
            var6 = var3.bind(var8)(var2);
            var3 = var6.remove;
            var2 = _closure1_slot18;
            var2 = var2.SEND_MESSAGES;
            var2 = var3.bind(var6)(var7, var2);
            _fun0005_ip = 104; continue _fun0005;
case 78:
            var3 = var5.isLockedThread;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0005_ip = 105; continue _fun0005 }
case 106:
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var9];
            var6 = var5.bind(var8)(var3);
            var5 = var6.has;
            var3 = _closure1_slot18;
            var3 = var3.MANAGE_THREADS;
            var3 = var5.bind(var6)(var7, var3);
            if(var3) { _fun0005_ip = 105; continue _fun0005 }
case 107:
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var9];
            var6 = var5.bind(var8)(var3);
            var5 = var6.remove;
            var3 = _closure1_slot18;
            var3 = var3.SEND_MESSAGES;
            var3 = var5.bind(var6)(var7, var3);
            _fun0005_ip = 108; continue _fun0005;
case 105:
            var6 = _closure1_slot2;
            var5 = _closure1_slot3;
            var5 = var5[var9];
            var6 = var6.bind(var8)(var5);
            var5 = var6.combine;
            var4 = _closure1_slot18;
            var4 = var4.SEND_MESSAGES;
            var3 = var5.bind(var6)(var7, var4);
case 108:
            var2 = var3;
case 104:
            var1 = var2;
case 102:
            return var1;
        }
    };
    var _closure1_slot34 = var6;
    var5 = function makeEveryoneOverwrite(arg1) {
        var1 = {};
        var2 = arg1;
        var1['id'] = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 19;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.PermissionOverwriteType;
        var3 = var3.ROLE;
        var1['type'] = var3;
        var3 = _closure1_slot23;
        var1['allow'] = var3;
        var2 = _closure1_slot23;
        var1['deny'] = var2;
        return var1;
    };
    var _closure1_slot35 = var5;
    var4 = function can(arg1) {
        var1 = arg1;
        var4 = var1.permission;
        var11 = var1.user;
        var10 = var1.context;
        var9 = var1.overwrites;
        var8 = var1.roles;
        var7 = var1.excludeGuildPermissions;
        var3 = _closure1_slot2;
        var5 = _closure1_slot3;
        var2 = 13;
        var2 = var5[var2];
        var6 = undefined;
        var3 = var3.bind(var6)(var2);
        var2 = var3.has;
        var5 = _closure1_slot33;
        var1 = {};
        var1['user'] = var11;
        var1['context'] = var10;
        var1['overwrites'] = var9;
        var1['roles'] = var8;
        var8 = true;
        var1['checkElevated'] = var8;
        var1['excludeGuildPermissions'] = var7;
        var1 = var5.bind(var6)(var1);
        var1 = var2.bind(var3)(var1, var4);
        return var1;
    };
    var _closure1_slot36 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var18 = 0;
    var8 = var14[var18];
    var1 = undefined;
    var8 = var17.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var14[var8];
    var8 = var13.bind(var1)(var8);
    var9 = var8.THREAD_CHANNEL_TYPES;
    var _closure1_slot7 = var9;
    var8 = var8.ChannelRecordBase;
    var _closure1_slot8 = var8;
    var8 = 4;
    var8 = var14[var8];
    var8 = var13.bind(var1)(var8);
    var9 = var8.getGuildEveryoneRoleId;
    var _closure1_slot9 = var9;
    var8 = var8.isGuildOwner;
    var _closure1_slot10 = var8;
    var8 = 5;
    var8 = var14[var8];
    var8 = var13.bind(var1)(var8);
    var8 = var8.hasPermission;
    var _closure1_slot11 = var8;
    var8 = 6;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 7;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 8;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 9;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 10;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 11;
    var8 = var14[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 12;
    var8 = var14[var8];
    var9 = var13.bind(var1)(var8);
    var8 = var9.Permissions;
    var _closure1_slot18 = var8;
    var10 = var9.ElevatedPermissions;
    var _closure1_slot19 = var10;
    var10 = var9.MFALevels;
    var _closure1_slot20 = var10;
    var10 = var9.ChannelTypes;
    var _closure1_slot21 = var10;
    var9 = var9.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot22 = var9;
    var12 = 13;
    var9 = var14[var12];
    var10 = var15.bind(var1)(var9);
    var9 = var10.deserialize;
    var11 = var9.bind(var10)(var18);
    var _closure1_slot23 = var11;
    var9 = var14[var12];
    var16 = var15.bind(var1)(var9);
    var10 = var16.combine;
    var9 = 14;
    var9 = var14[var9];
    var17 = var17.bind(var1)(var9);
    var9 = var17.values;
    var67 = var9.bind(var17)(var8);
    var9 = new Array(0);
    var68 = var9;
    var66 = 0;
    var17 = arraySpread(var68, var67, var66);
    var68 = var10;
    var67 = var9;
    var66 = var16;
    var10 = apply(var68, var67, var66);
    var _closure1_slot24 = var10;
    var9 = var14[var12];
    var42 = var15.bind(var1)(var9);
    var41 = var42.combine;
    var68 = var8.CREATE_INSTANT_INVITE;
    var67 = var8.CHANGE_NICKNAME;
    var66 = var8.VIEW_CHANNEL;
    var65 = var8.SEND_MESSAGES;
    var64 = var8.EMBED_LINKS;
    var63 = var8.ATTACH_FILES;
    var62 = var8.READ_MESSAGE_HISTORY;
    var61 = var8.MENTION_EVERYONE;
    var60 = var8.USE_EXTERNAL_EMOJIS;
    var59 = var8.USE_EXTERNAL_STICKERS;
    var58 = var8.ADD_REACTIONS;
    var57 = var8.CREATE_PUBLIC_THREADS;
    var56 = var8.CREATE_PRIVATE_THREADS;
    var55 = var8.SEND_MESSAGES_IN_THREADS;
    var54 = var8.SEND_POLLS;
    var53 = var8.CONNECT;
    var52 = var8.SPEAK;
    var51 = var8.USE_VAD;
    var50 = var8.STREAM;
    var49 = var8.USE_EMBEDDED_ACTIVITIES;
    var48 = var8.USE_SOUNDBOARD;
    var47 = var8.REQUEST_TO_SPEAK;
    var46 = var8.USE_APPLICATION_COMMANDS;
    var45 = var8.CREATE_GUILD_EXPRESSIONS;
    var44 = var8.CREATE_EVENTS;
    var43 = var8.USE_EXTERNAL_APPS;
    var69 = var42;
    var9 = var69[var41](var68, var67, var66, var65, var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43, var42);
    var _closure1_slot25 = var9;
    var16 = var14[var12];
    var19 = var15.bind(var1)(var16);
    var18 = var19.combine;
    var17 = var8.VIEW_CHANNEL;
    var16 = var8.READ_MESSAGE_HISTORY;
    var16 = var18.bind(var19)(var17, var16);
    var _closure1_slot26 = var16;
    var16 = var14[var12];
    var29 = var15.bind(var1)(var16);
    var28 = var29.combine;
    var68 = var8.VIEW_CHANNEL;
    var67 = var8.SEND_MESSAGES;
    var66 = var8.CONNECT;
    var65 = var8.SPEAK;
    var64 = var8.STREAM;
    var63 = var8.USE_EMBEDDED_ACTIVITIES;
    var62 = var8.USE_EXTERNAL_APPS;
    var61 = var8.USE_EXTERNAL_EMOJIS;
    var60 = var8.USE_EXTERNAL_SOUNDS;
    var59 = var8.USE_EXTERNAL_STICKERS;
    var58 = var8.USE_SOUNDBOARD;
    var57 = var8.USE_VAD;
    var69 = var29;
    var16 = var69[var28](var68, var67, var66, var65, var64, var63, var62, var61, var60, var59, var58, var57, var56);
    var _closure1_slot27 = var16;
    var16 = var14[var12];
    var19 = var15.bind(var1)(var16);
    var18 = var19.combine;
    var17 = var8.VIEW_CHANNEL;
    var16 = var8.READ_MESSAGE_HISTORY;
    var16 = var18.bind(var19)(var17, var16);
    var _closure1_slot28 = var16;
    var16 = var14[var12];
    var20 = var15.bind(var1)(var16);
    var19 = var20.combine;
    var18 = var8.VIEW_CHANNEL;
    var17 = var8.READ_MESSAGE_HISTORY;
    var16 = var8.CHANGE_NICKNAME;
    var16 = var19.bind(var20)(var18, var17, var16);
    var _closure1_slot29 = var16;
    var12 = var14[var12];
    var23 = var15.bind(var1)(var12);
    var22 = var23.combine;
    var68 = var8.MANAGE_GUILD;
    var67 = var8.MANAGE_ROLES;
    var66 = var8.ADMINISTRATOR;
    var65 = var8.BAN_MEMBERS;
    var64 = var8.MANAGE_NICKNAMES;
    var63 = var8.CREATE_GUILD_EXPRESSIONS;
    var62 = var8.MANAGE_GUILD_EXPRESSIONS;
    var61 = var8.MANAGE_WEBHOOKS;
    var60 = var8.VIEW_AUDIT_LOG;
    var69 = var23;
    var8 = var69[var22](var68, var67, var66, var65, var64, var63, var62, var61, var60, var59);
    var12 = 20;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'utils/PermissionUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var3['NONE'] = var11;
    var3['ALL'] = var10;
    var3['DEFAULT'] = var9;
    var3['VIEW_GUILD_SETTINGS'] = var8;
    var8 = function computePermissionsForRoles(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var12 = var1.forceRoles;
            var6 = var1.context;
            var10 = var1.overwrites;
            var9 = var1.roles;
            var8 = var1.checkElevated;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var8 = true;
case 109:
            var7 = var1.excludeGuildPermissions;
            var2 = _closure1_slot26;
            var3 = _closure1_slot8;
            var3 = var6 instanceof var3;
            if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 111:
            var3 = null;
            var11 = var10;
            if(!(var3 == var11)) { _fun0006_ip = 112; continue _fun0006 }
case 113:
            var11 = {};
case 112:
            var13 = var6;
            var4 = var2;
            _fun0006_ip = 114; continue _fun0006;
case 39:
            var3 = var6.isScheduledForDeletion;
            var3 = var3.bind(var6)();
            if(var3) { _fun0006_ip = 115; continue _fun0006 }
case 116:
            var15 = _closure1_slot7;
            var14 = var15.has;
            var3 = var6.type;
            var3 = var14.bind(var15)(var3);
            if(var3) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var3 = var6.computeLurkerPermissionsAllowList;
            var14 = var3.bind(var6)();
            var3 = null;
            if(!(var3 != var14)) { _fun0006_ip = 119; continue _fun0006 }
case 120:
            var2 = var14;
case 119:
            if(!(var3 == var10)) { _fun0006_ip = 74; continue _fun0006 }
case 121:
            var14 = var6.permissionOverwrites;
            _fun0006_ip = 122; continue _fun0006;
case 74:
            var15 = {};
            var19 = var6.permissionOverwrites;
            var20 = var15;
            var16 = copyDataProperties(var20, var19);
            var20 = var15;
            var19 = var10;
            var16 = copyDataProperties(var20, var19);
            var14 = var15;
case 122:
            var15 = var6.getGuildId;
            var17 = var15.bind(var6)();
            var15 = var3 != var17;
            var3 = null;
            if(!var15) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var16 = _closure1_slot16;
            var15 = var16.getGuild;
            var3 = var15.bind(var16)(var17);
case 123:
            var13 = var3;
            var11 = var14;
            var4 = var2;
case 114:
            var2 = null;
            if(!(var2 != var13)) { _fun0006_ip = 53; continue _fun0006 }
case 125:
            var14 = {'userId': null, 'nick': '', 'guildId': null, 'guildMemberAvatar': null, 'roles': null, 'colorString': null, 'colorStrings': null, 'hoistRoleId': null, 'premiumSince': null, 'isPending': false};
            var15 = _closure1_slot22;
            var14['userId'] = var15;
            var3 = var13.id;
            var14['guildId'] = var3;
            var16 = _closure1_slot1;
            var17 = _closure1_slot3;
            var3 = 17;
            var3 = var17[var3];
            var16 = var16.bind(var5)(var3);
            var3 = var16.keys;
            var3 = var3.bind(var16)(var12);
            var14['roles'] = var3;
            var3 = global;
            var3 = var3.Date;
            var16 = var3.prototype;
            var16 = Object.create(var16, {constructor: {value: var3}});
            var21 = var16;
            var3 = new var21[var3](var20);
            var16 = var3 instanceof Object ? var3 : var16;
            var3 = var16.toISOString;
            var3 = var3.bind(var16)();
            var14['joinedAt'] = var3;
            var14['communicationDisabledUntil'] = var2;
            var3 = _closure1_slot32;
            var2 = {};
            var2['userId'] = var15;
            var2['member'] = var14;
            var2['guild'] = var13;
            var2['overwrites'] = var11;
            var2['roles'] = var9;
            var2['checkElevated'] = var8;
            var2['excludeGuildPermissions'] = var7;
            var2['lurkerPermissionsMask'] = var4;
            var2 = var3.bind(var5)(var2);
            return var2;
case 53:
            var2 = _closure1_slot23;
            return var2;
case 117:
            var4 = _closure1_slot13;
            var3 = var4.getChannel;
            var2 = var6.parent_id;
            var11 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var11)) { _fun0006_ip = 126; continue _fun0006 }
case 127:
            var4 = _closure1_slot34;
            var3 = _closure1_slot37;
            var2 = {};
            var2['forceRoles'] = var12;
            var2['context'] = var11;
            var2['overwrites'] = var10;
            var2['roles'] = var9;
            var2['checkElevated'] = var8;
            var2['excludeGuildPermissions'] = var7;
            var3 = var3.bind(var5)(var2);
            var2 = false;
            var2 = var4.bind(var5)(var6, var3, var2);
            _fun0006_ip = 128; continue _fun0006;
case 126:
            var2 = _closure1_slot23;
case 128:
            return var2;
case 115:
            var1 = _closure1_slot23;
            return var1;
        }
    };
    var _closure1_slot37 = var8;
    var3['computePermissionsForRoles'] = var8;
    var3['computePermissions'] = var7;
    var3['applyThreadPermissions'] = var6;
    var6 = function areChannelsLocked(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var6 = _closure1_slot7;
            var5 = var6.has;
            var3 = var7.type;
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0007_ip = 48; continue _fun0007 }
case 129:
            var3 = var7.guild_id;
            var6 = null;
            if(!(var6 != var4)) { _fun0007_ip = 130; continue _fun0007 }
case 131:
            if(!(var6 != var3)) { _fun0007_ip = 130; continue _fun0007 }
case 32:
            var5 = var4.guild_id;
            if(!(var3 === var5)) { _fun0007_ip = 130; continue _fun0007 }
case 132:
            var5 = {};
            var9 = var7.permissionOverwrites;
            var10 = var5;
            var7 = copyDataProperties(var10, var9);
            var _closure2_slot0 = var5;
            var7 = {};
            var9 = var4.permissionOverwrites;
            var10 = var7;
            var4 = copyDataProperties(var10, var9);
            var _closure2_slot1 = var7;
            var4 = var5[var3];
            if(!(var6 == var4)) { _fun0007_ip = 133; continue _fun0007 }
case 134:
            var8 = _closure1_slot35;
            var4 = undefined;
            var4 = var8.bind(var4)(var3);
            var5[var3] = var4;
case 133:
            var4 = var7[var3];
            if(!(var6 == var4)) { _fun0007_ip = 135; continue _fun0007 }
case 136:
            var4 = _closure1_slot35;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var7[var3] = var1;
case 135:
            var3 = global;
            var4 = var3.Object;
            var1 = var4.keys;
            var1 = var1.bind(var4)(var5);
            var4 = var1.length;
            var6 = var3.Object;
            var1 = var6.keys;
            var1 = var1.bind(var6)(var7);
            var1 = var1.length;
            var1 = var4 === var1;
            if(!var1) { _fun0007_ip = 137; continue _fun0007 }
case 138:
            var4 = var3.Object;
            var3 = var4.keys;
            var4 = var3.bind(var4)(var5);
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var2 = var2[var3];
                    var1 = _closure2_slot1;
                    var3 = var1[var3];
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0008_ip = 139; continue _fun0008 }
case 140:
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.equals;
                    var5 = var3.deny;
                    var4 = var2.deny;
                    var4 = var6.bind(var7)(var5, var4);
                    var1 = !var4;
case 139:
                    if(var1) { _fun0008_ip = 136; continue _fun0008 }
case 39:
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.equals;
                    var3 = var3.allow;
                    var2 = var2.allow;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 136:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 137:
            return var1;
case 130:
            var1 = false;
            return var1;
case 48:
            var1 = true;
            return var1;
        }
    };
    var3['areChannelsLocked'] = var6;
    var6 = function getGuildVisualOwnerId(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.some;
            var7 = _closure1_slot15;
            var4 = var7.getUnsafeMutableRoles;
            var1 = var3.id;
            var4 = var4.bind(var7)(var1);
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.hoist;
                    if(!var1) { _fun0010_ip = 61; continue _fun0010 }
case 3:
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot18;
                    var3 = var2.ADMINISTRATOR;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var5, var3);
case 61:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4, var1);
            var1 = undefined;
            if(var4) { _fun0009_ip = 141; continue _fun0009 }
case 142:
            var3 = var3.ownerId;
            var4 = null;
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0009_ip = 143; continue _fun0009 }
case 99:
            var2 = var3;
case 143:
            var1 = var2;
case 141:
            return var1;
        }
    };
    var3['getGuildVisualOwnerId'] = var6;
    var6 = function isRoleHigher(arg1, arg2, arg3, arg4) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg2;
            var7 = arg3;
            var6 = arg4;
            var3 = null;
            var2 = var3 == var8;
            if(var2) { _fun0011_ip = 60; continue _fun0011 }
case 144:
            var5 = _closure1_slot10;
            var4 = undefined;
            var1 = arg1;
            var1 = var5.bind(var4)(var1, var8);
            var2 = !var1;
case 60:
            var1 = !var2;
            if(!var2) { _fun0011_ip = 116; continue _fun0011 }
case 31:
            var2 = var3 != var7;
            if(!var2) { _fun0011_ip = 145; continue _fun0011 }
case 146:
            var3 = var3 == var6;
            if(var3) { _fun0011_ip = 147; continue _fun0011 }
case 148:
            var8 = _closure1_slot0;
            var5 = _closure1_slot3;
            var4 = 18;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var4 = var5.doesRoleSortHigher;
            var3 = var4.bind(var5)(var7, var6);
case 147:
            var2 = var3;
case 145:
            var1 = var2;
case 116:
            return var1;
        }
    };
    var3['isRoleHigher'] = var6;
    var6 = function getHighestRole(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var7 = _closure1_slot14;
            var6 = var7.getMember;
            var5 = var2.id;
            var4 = arg2;
            var5 = var6.bind(var7)(var5, var4);
            var _closure2_slot0 = var5;
            var4 = null;
            if(!(var4 == var5)) { _fun0012_ip = 7; continue _fun0012 }
case 149:
            var4 = undefined;
            return var4;
case 7:
            var4 = _closure1_slot15;
            var3 = var4.getSortedRoles;
            var2 = var2.id;
            var3 = var3.bind(var4)(var2);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = _closure2_slot0;
                var3 = var1.roles;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getHighestRole'] = var6;
    var6 = function getHighestHoistedRole(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg2;
            var3 = var2.hoistRoleId;
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0013_ip = 62; continue _fun0013 }
case 144:
            var5 = _closure1_slot15;
            var4 = var5.getRole;
            var3 = arg1;
            var3 = var3.id;
            var2 = var2.hoistRoleId;
            var1 = var4.bind(var5)(var3, var2);
case 62:
            return var1;
        }
    };
    var3['getHighestHoistedRole'] = var6;
    var3['makeEveryoneOverwrite'] = var5;
    var5 = function canManageACategory(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var4 = arg3;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot36;
            var3 = {};
            var6 = _closure1_slot18;
            var6 = var6.MANAGE_CHANNELS;
            var3['permission'] = var6;
            var3['user'] = var1;
            var1 = arg2;
            var3['context'] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var3);
            var3 = !var1;
            var1 = !var3;
            if(!var3) { _fun0014_ip = 66; continue _fun0014 }
case 150:
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.channel;
                    var3 = var2.id;
                    var1 = 'null';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0015_ip = 6; continue _fun0015 }
case 151:
                    var4 = _closure1_slot36;
                    var3 = {};
                    var5 = _closure1_slot18;
                    var5 = var5.MANAGE_CHANNELS;
                    var3['permission'] = var5;
                    var5 = _closure2_slot0;
                    var3['user'] = var5;
                    var3['context'] = var2;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 6:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 66:
            return var1;
        }
    };
    var3['canManageACategory'] = var5;
    var3['can'] = var4;
    var4 = 'ALLOW';
    var3['ALLOW'] = var4;
    var4 = 'DENY';
    var3['DENY'] = var4;
    var4 = 'PASSTHROUGH';
    var3['PASSTHROUGH'] = var4;
    var4 = function canEveryoneRole(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg2;
            var4 = {};
            var2 = _closure1_slot8;
            var5 = var3 instanceof var2;
            var2 = var3;
            if(!var5) { _fun0016_ip = 120; continue _fun0016 }
case 152:
            var6 = var3.type;
            var5 = _closure1_slot21;
            var5 = var5.PRIVATE_THREAD;
            if(!(var6 !== var5)) { _fun0016_ip = 153; continue _fun0016 }
case 154:
            var7 = _closure1_slot7;
            var6 = var7.has;
            var5 = var3.type;
            var5 = var6.bind(var7)(var5);
            var6 = var3;
            if(!var5) { _fun0016_ip = 155; continue _fun0016 }
case 132:
            var7 = _closure1_slot13;
            var5 = var7.getChannel;
            var3 = var3.parent_id;
            var6 = var5.bind(var7)(var3);
            var3 = null;
            if(!(var3 != var6)) { _fun0016_ip = 156; continue _fun0016 }
case 155:
            var3 = var6.permissionOverwrites;
            var5 = var6.getGuildId;
            var8 = var5.bind(var6)();
            var5 = null;
            var6 = var5 != var8;
            if(!var6) { _fun0016_ip = 157; continue _fun0016 }
case 158:
            var7 = _closure1_slot16;
            var6 = var7.getGuild;
            var5 = var6.bind(var7)(var8);
case 157:
            var2 = var5;
            var4 = var3;
case 120:
            var3 = null;
            if(!(var3 != var2)) { _fun0016_ip = 159; continue _fun0016 }
case 8:
            var6 = _closure1_slot15;
            var5 = var6.getEveryoneRole;
            var5 = var5.bind(var6)(var2);
            var11 = var5.permissions;
            var2 = var2.id;
            var2 = var4[var2];
            var4 = var11;
            if(!(var3 != var2)) { _fun0016_ip = 160; continue _fun0016 }
case 161:
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var3 = 13;
            var6 = var8[var3];
            var5 = undefined;
            var10 = var7.bind(var5)(var6);
            var9 = var10.remove;
            var6 = var2.deny;
            var6 = var9.bind(var10)(var11, var6);
            var3 = var8[var3];
            var5 = var7.bind(var5)(var3);
            var3 = var5.add;
            var2 = var2.allow;
            var4 = var3.bind(var5)(var6, var2);
case 160:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
case 159:
            var1 = false;
            return var1;
case 156:
            var1 = false;
            return var1;
case 153:
            var1 = false;
            return var1;
        }
    };
    var3['canEveryoneRole'] = var4;
    var2 = function canEveryone(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var7;
            var5 = {};
            var4 = _closure1_slot8;
            var4 = var1 instanceof var4;
            var6 = var1;
            if(!var4) { _fun0017_ip = 8; continue _fun0017 }
case 140:
            var8 = var1.type;
            var4 = _closure1_slot21;
            var4 = var4.PRIVATE_THREAD;
            if(!(var8 !== var4)) { _fun0017_ip = 162; continue _fun0017 }
case 163:
            var9 = _closure1_slot7;
            var8 = var9.has;
            var4 = var1.type;
            var4 = var8.bind(var9)(var4);
            var8 = var1;
            if(!var4) { _fun0017_ip = 10; continue _fun0017 }
case 164:
            var9 = _closure1_slot13;
            var4 = var9.getChannel;
            var1 = var1.parent_id;
            var8 = var4.bind(var9)(var1);
            var1 = null;
            if(!(var1 != var8)) { _fun0017_ip = 165; continue _fun0017 }
case 10:
            var1 = var8.permissionOverwrites;
            var4 = var8.getGuildId;
            var10 = var4.bind(var8)();
            var4 = null;
            var8 = var4 != var10;
            if(!var8) { _fun0017_ip = 119; continue _fun0017 }
case 166:
            var9 = _closure1_slot16;
            var8 = var9.getGuild;
            var4 = var8.bind(var9)(var10);
case 119:
            var6 = var4;
            var5 = var1;
case 8:
            var1 = null;
            if(!(var1 != var6)) { _fun0017_ip = 167; continue _fun0017 }
case 74:
            var4 = _closure1_slot15;
            var1 = var4.getEveryoneRole;
            var4 = var1.bind(var4)(var6);
            var1 = _closure1_slot11;
            var6 = undefined;
            var1 = var1.bind(var6)(var4, var7);
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0017_ip = 81; continue _fun0017 }
case 168:
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 14;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.some;
            var2 = function(arg1) {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.has;
                var1 = arg1;
                var2 = var1.deny;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var3.bind(var4)(var5, var2);
            var1 = !var2;
case 81:
            return var1;
case 167:
            var1 = false;
            return var1;
case 165:
            var1 = false;
            return var1;
case 162:
            var1 = false;
            return var1;
        }
    };
    var3['canEveryone'] = var2;
    return var1;
})();