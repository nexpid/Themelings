// app/utils/UserUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var18;
    var1 = function present(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
case 2:
            var1 = !var1;
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var14 = function nameFromUser(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot10;
            var3 = var2.global_name;
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot10;
            var3 = var2.globalName;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot10;
            var3 = var2.username;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot7;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var1 = var2.username;
case 10:
            _fun0002_ip = 11; continue _fun0002;
case 6:
            var1 = var2.globalName;
case 11:
            _fun0002_ip = 12; continue _fun0002;
case 4:
            var1 = var2.global_name;
case 12:
            return var1;
        }
    };
    var _closure1_slot11 = var14;
    var13 = function getName(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = null;
            if(!(var6 == var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = undefined;
            return var2;
case 13:
            var3 = _closure1_slot2;
            var5 = var3.hidePersonalInformation;
            var3 = _closure1_slot11;
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var7 = var3.toLocaleLowerCase;
            var7 = var7.bind(var3)();
            var9 = var1.username;
            var8 = var6 == var9;
            var6 = undefined;
            if(var8) { _fun0003_ip = 6; continue _fun0003 }
case 17:
            var8 = var9.toLocaleLowerCase;
            var6 = var8.bind(var9)();
case 6:
            var5 = var7 === var6;
case 15:
            if(!var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var6 = var1.discriminator;
            var1 = '0';
            var5 = var1 === var6;
case 18:
            var1 = var3;
            if(!var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = _closure1_slot8;
            var1 = var2.bind(var4)(var3);
case 20:
            return var1;
        }
    };
    var12 = function useName(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 3;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot2;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var5 = var6.bind(var7)(var5, var3);
            var6 = null;
            if(!(var6 == var1)) { _fun0004_ip = 22; continue _fun0004 }
case 17:
            return var4;
case 22:
            var3 = _closure1_slot11;
            var3 = var3.bind(var4)(var1);
            if(!var5) { _fun0004_ip = 23; continue _fun0004 }
case 15:
            var7 = var3.toLocaleLowerCase;
            var7 = var7.bind(var3)();
            var9 = var1.username;
            var8 = var6 == var9;
            var6 = undefined;
            if(var8) { _fun0004_ip = 20; continue _fun0004 }
case 24:
            var8 = var9.toLocaleLowerCase;
            var6 = var8.bind(var9)();
case 20:
            var5 = var7 === var6;
case 23:
            if(!var5) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var6 = var1.discriminator;
            var1 = '0';
            var5 = var1 === var6;
case 25:
            var1 = var3;
            if(!var5) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var2 = _closure1_slot8;
            var1 = var2.bind(var4)(var3);
case 27:
            return var1;
        }
    };
    var11 = function getGlobalName(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var1 = undefined;
            return var1;
case 13:
            var5 = _closure1_slot10;
            var4 = var2.globalName;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 29:
            var4 = _closure1_slot10;
            var3 = var2.global_name;
            var3 = var4.bind(var1)(var3);
            var1 = undefined;
            if(!var3) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var1 = var2.global_name;
case 30:
            _fun0005_ip = 32; continue _fun0005;
case 17:
            var1 = var2.globalName;
case 32:
            return var1;
        }
    };
    var _closure1_slot12 = var11;
    var10 = function getFormattedName(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var5 = arguments[1];
            var2 = undefined;
            if(!(var5 === var2)) { _fun0006_ip = 33; continue _fun0006 }
case 3:
            var5 = false;
case 33:
            var3 = null;
            if(!(var3 != var4)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var6 = _closure1_slot12;
            var8 = var6.bind(var2)(var4);
            if(var5) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var7 = var4.username;
            if(!(var3 == var7)) { _fun0006_ip = 38; continue _fun0006 }
case 7:
            var7 = _closure1_slot7;
case 38:
            _fun0006_ip = 39; continue _fun0006;
case 36:
            var1 = _closure1_slot15;
            var7 = var1.bind(var2)(var4);
case 39:
            var1 = var8;
            if(!(var1 !== var7)) { _fun0006_ip = 40; continue _fun0006 }
case 22:
            var2 = var7;
            if(!(var3 != var8)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var13 = '';
            var11 = ' (';
            var9 = ')';
            var12 = var8;
            var10 = var7;
            var2 = var13[var6](var12, var11, var10, var9, var8);
case 41:
            var1 = var2;
case 40:
            return var1;
case 34:
            var1 = _closure1_slot7;
            return var1;
        }
    };
    var9 = function humanizeStatus(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0007_ip = 33; continue _fun0007 }
case 3:
            var2 = {};
case 33:
            var3 = var2.isMobile;
            var1 = var7 !== var3;
            if(!var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var1 = var3;
case 43:
            var2 = var2.isVR;
            var5 = var7 !== var2;
            if(!var5) { _fun0007_ip = 38; continue _fun0007 }
case 45:
            var5 = var2;
case 38:
            var3 = _closure1_slot5;
            var3 = var3.ONLINE;
            if(!(var3 !== var4)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var3 = _closure1_slot5;
            var3 = var3.OFFLINE;
            if(!(var3 !== var4)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var3 = _closure1_slot5;
            var3 = var3.IDLE;
            if(!(var3 !== var4)) { _fun0007_ip = 50; continue _fun0007 }
case 24:
            var3 = _closure1_slot5;
            var3 = var3.DND;
            if(!(var3 !== var4)) { _fun0007_ip = 51; continue _fun0007 }
case 26:
            var3 = _closure1_slot5;
            var3 = var3.INVISIBLE;
            if(!(var3 !== var4)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var3 = _closure1_slot5;
            var3 = var3.STREAMING;
            if(!(var3 !== var4)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var3 = _closure1_slot5;
            var3 = var3.UNKNOWN;
            var3 = null;
            return var3;
case 54:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var4 = var9[var3];
            var4 = var8.bind(var7)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.XKYej5;
            var3 = var4.bind(var6)(var3);
            return var3;
case 52:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var4 = var9[var3];
            var4 = var8.bind(var7)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.bg24HO;
            var3 = var4.bind(var6)(var3);
            return var3;
case 51:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var4 = var9[var3];
            var4 = var8.bind(var7)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.jaNpQH;
            var3 = var4.bind(var6)(var3);
            return var3;
case 50:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var4 = var9[var3];
            var4 = var8.bind(var7)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.qWbtVU;
            var3 = var4.bind(var6)(var3);
            return var3;
case 48:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var4 = var9[var3];
            var4 = var8.bind(var7)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.Vv0abJ;
            var3 = var4.bind(var6)(var3);
            return var3;
case 46:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 4;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            if(var5) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            if(var1) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var1 = var2.WbGtnH;
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 60; continue _fun0007;
case 58:
            var5 = var2.9hghLD;
            var1 = var3.bind(var4)(var5);
case 60:
            _fun0007_ip = 61; continue _fun0007;
case 56:
            var2 = var2.SWnU0R;
            var1 = var3.bind(var4)(var2);
case 61:
            return var1;
        }
    };
    var8 = function accountAgeInRange(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var5 = var1.maxDaysOld;
            var4 = var1.minDaysOld;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0008_ip = 5; continue _fun0008 }
case 62:
            var4 = 0;
case 5:
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var3 = global;
            var6 = var3.Date;
            var3 = var6.now;
            var3 = var3.bind(var6)();
            var6 = var2.createdAt;
            var2 = var6.getTime;
            var2 = var2.bind(var6)();
            var3 = var3 - var2;
            var1 = var1 == var5;
            if(var1) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var2 = _closure1_slot6;
            var2 = var2 * var5;
            var1 = var3 <= var2;
case 65:
            if(!var1) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var2 = _closure1_slot6;
            var2 = var2 * var4;
            var1 = var3 >= var2;
case 67:
            return var1;
case 63:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var8;
    var1 = function presentUserTag(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var8 = arg3;
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var5 = _closure1_slot10;
            var1 = var2.username;
            var6 = undefined;
            var1 = var5.bind(var6)(var1);
            if(var1) { _fun0009_ip = 71; continue _fun0009 }
case 16:
            var1 = _closure1_slot7;
            return var1;
case 71:
            var7 = var3.identifiable;
            var5 = 'always';
            var1 = false;
            if(!(var5 !== var7)) { _fun0009_ip = 72; continue _fun0009 }
case 30:
            var7 = var3.identifiable;
            var5 = 'never';
            var1 = var8;
            if(!(var5 === var7)) { _fun0009_ip = 72; continue _fun0009 }
case 19:
            var1 = true;
case 72:
            var7 = var2.discriminator;
            var5 = '0';
            if(!(var5 !== var7)) { _fun0009_ip = 40; continue _fun0009 }
case 73:
            var7 = var2.discriminator;
            var5 = _closure1_slot4;
            if(!(var7 === var5)) { _fun0009_ip = 74; continue _fun0009 }
case 40:
            if(var1) { _fun0009_ip = 75; continue _fun0009 }
case 23:
            var7 = var2.username;
            _fun0009_ip = 76; continue _fun0009;
case 75:
            var5 = _closure1_slot8;
            var4 = var2.username;
            var7 = var5.bind(var6)(var4);
case 76:
            var6 = var3.decoration;
            var5 = 'never';
            var4 = var7;
            if(!(var5 !== var6)) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            var5 = global;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = '@';
            var4 = var6.bind(var5)(var7);
case 77:
            return var4;
case 74:
            var4 = var3.mode;
            var3 = 'username';
            if(!(var3 !== var4)) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            if(var1) { _fun0009_ip = 79; continue _fun0009 }
case 81:
            var6 = var2.username;
            var5 = var2.discriminator;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = '#';
            var1 = var4.bind(var3)(var6, var1, var5);
            _fun0009_ip = 82; continue _fun0009;
case 79:
            var1 = var2.username;
case 82:
            return var1;
case 69:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.sKdZ6U;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var6 = function getUserTag(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = {};
            var7 = _closure1_slot9;
            var8 = var5;
            var2 = copyDataProperties(var8, var7);
            var7 = arg2;
            var8 = var5;
            var2 = copyDataProperties(var8, var7);
            var4 = _closure1_slot14;
            var3 = var5.identifiable;
            var2 = 'auto';
            var3 = var2 !== var3;
            if(var3) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            var1 = _closure1_slot2;
            var3 = var1.hidePersonalInformation;
case 83:
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var5, var3);
            return var1;
        }
    };
    var _closure1_slot15 = var6;
    var5 = function useUserTag(arg1, arg2) {
        var5 = _closure1_slot14;
        var4 = {};
        var9 = _closure1_slot9;
        var10 = var4;
        var2 = copyDataProperties(var10, var9);
        var9 = arg2;
        var10 = var4;
        var2 = copyDataProperties(var10, var9);
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var2 = var3[var2];
        var3 = undefined;
        var7 = var6.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = _closure1_slot2;
            var1 = var1.hidePersonalInformation;
            return var1;
        };
        var2 = var6.bind(var7)(var2, var1);
        var1 = arg1;
        var1 = var5.bind(var3)(var1, var4, var2);
        return var1;
    };
    var4 = function useDirectMessageRecipient(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                if(!(var4 == var1)) { _fun0011_ip = 85; continue _fun0011 }
case 13:
                var1 = undefined;
                return var1;
case 85:
                var3 = _closure2_slot0;
                var1 = var3.isPrivate;
                var3 = var1.bind(var3)();
                var1 = null;
                if(!var3) { _fun0011_ip = 86; continue _fun0011 }
case 29:
                var5 = _closure2_slot0;
                var3 = var5.isDM;
                var3 = var3.bind(var5)();
                var1 = null;
                if(!var3) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                var4 = _closure1_slot3;
                var3 = var4.getUser;
                var5 = _closure2_slot0;
                var2 = var5.getRecipientId;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 86:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = function getUserIsStaff() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = _closure1_slot3;
            var1 = var2.getCurrentUser;
            var3 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0012_ip = 37; continue _fun0012 }
case 88:
            var2 = var3.isStaff;
            var1 = var2.bind(var3)();
case 37:
            return var1;
        }
    };
    var1 = global;
    var20 = var1.Object;
    var19 = var20.defineProperty;
    var15 = {};
    var1 = true;
    var15['value'] = var1;
    var1 = '__esModule';
    var1 = var19.bind(var20)(var3, var1, var15);
    var1 = 0;
    var15 = var18[var1];
    var1 = undefined;
    var15 = var16.bind(var1)(var15);
    var _closure1_slot2 = var15;
    var15 = 1;
    var15 = var18[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot3 = var15;
    var15 = 2;
    var15 = var18[var15];
    var15 = var17.bind(var1)(var15);
    var16 = var15.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot4 = var16;
    var15 = var15.StatusTypes;
    var _closure1_slot5 = var15;
    var15 = 86400000;
    var _closure1_slot6 = var15;
    var15 = '???';
    var _closure1_slot7 = var15;
    var15 = function conceal(arg1) {
        var2 = arg1;
        var1 = 0;
        var4 = var2[var1];
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '…';
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var _closure1_slot8 = var15;
    var15 = {'mode': 'full', 'decoration': 'never', 'identifiable': 'auto'};
    var _closure1_slot9 = var15;
    var15 = {};
    var15['getName'] = var13;
    var15['useName'] = var12;
    var16 = function isNameConcealed(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var2 = var4.length;
            var1 = 2;
            var1 = var1 === var2;
            if(!var1) { _fun0013_ip = 89; continue _fun0013 }
case 70:
            var3 = var4.endsWith;
            var2 = '…';
            var1 = var3.bind(var4)(var2);
case 89:
            return var1;
        }
    };
    var15['isNameConcealed'] = var16;
    var15['getUserTag'] = var6;
    var15['useUserTag'] = var5;
    var15['getUserIsStaff'] = var2;
    var15['getFormattedName'] = var10;
    var15['getGlobalName'] = var11;
    var15['humanizeStatus'] = var9;
    var15['useDirectMessageRecipient'] = var4;
    var16 = 5;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'utils/UserUtils.tsx';
    var16 = var17.bind(var18)(var16);
    var3['default'] = var15;
    var3['nameFromUser'] = var14;
    var3['getName'] = var13;
    var3['useName'] = var12;
    var3['getGlobalName'] = var11;
    var3['getFormattedName'] = var10;
    var3['humanizeStatus'] = var9;
    var3['accountAgeInRange'] = var8;
    var8 = function ageEligibleForPremiumUpsell(arg1) {
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg1;
        var1 = {'minDaysOld': 0, 'maxDaysOld': 30};
        var1 = var4.bind(var3)(var2, var1);
        var1 = !var1;
        return var1;
    };
    var3['ageEligibleForPremiumUpsell'] = var8;
    var7 = function isNewUser(arg1) {
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg1;
        var1 = {'minDaysOld': 0, 'maxDaysOld': 7};
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['isNewUser'] = var7;
    var3['getUserTag'] = var6;
    var3['useUserTag'] = var5;
    var3['useDirectMessageRecipient'] = var4;
    var3['getUserIsStaff'] = var2;
    return var1;
})();