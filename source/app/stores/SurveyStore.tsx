// app/stores/SurveyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot29;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot29;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function isSurveyDataStale() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot18;
            var3 = var1.lastFetched;
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 40:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot18;
            var3 = var3.lastFetched;
            var3 = var4 - var3;
            var2 = _closure1_slot24;
            var1 = var3 >= var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var11 = function fetchSurveyIfNeeded() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot23;
            if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var4 = _closure1_slot30;
            var3 = undefined;
            var4 = var4.bind(var3)();
            var3 = !var4;
            if(var4) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var4 = _closure1_slot18;
            var5 = var4.surveyOverride;
            var4 = null;
            var3 = var4 == var5;
case 43:
            var2 = var3;
case 41:
            if(var2) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var4 = true;
            _closure1_slot23 = var4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.surveyFetch;
            var1 = _closure1_slot18;
            var1 = var1.surveyOverride;
            var1 = var2.bind(var3)(var1, var4);
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var1 = function meetsSurveyRequirements(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var30 = arg1;
            var24 = undefined;
            var25 = undefined;
            var26 = undefined;
            var27 = undefined;
            var28 = undefined;
            var29 = undefined;
            var23 = var30.guild_requirements;
            if(!(var24 === var23)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var23 = new Array(0);
case 47:
            var22 = var30.guild_size;
            if(!(var24 === var22)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var22 = [null, null];
case 49:
            var21 = var30.guild_permissions;
            if(!(var24 === var21)) { _fun0007_ip = 34; continue _fun0007 }
case 51:
            var21 = new Array(0);
case 34:
            var3 = var23.length;
            var20 = 0;
            var1 = true;
            if(!(var20 !== var3)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var3 = _closure1_slot28;
            var6 = var3.bind(var24)(var23);
            var5 = var6.bind(var24)();
            var3 = var5.done;
            if(var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var8 = var5.value;
            var7 = _closure1_slot26;
            var3 = var7.has;
            var3 = var3.bind(var7)(var8);
            var1 = false;
            if(!var3) { _fun0007_ip = 52; continue _fun0007 }
case 56:
            var7 = var6.bind(var24)();
            var3 = var7.done;
            var5 = var7;
            if(!var3) { _fun0007_ip = 55; continue _fun0007 }
case 54:
            var5 = var23.includes;
            var3 = _closure1_slot25;
            var3 = var3.GUILD_SIZE_ALL;
            var5 = var5.bind(var23)(var3);
            var6 = _closure1_slot28;
            var7 = _closure1_slot10;
            var3 = var7.getGuildsArray;
            var3 = var3.bind(var7)();
            var18 = var6.bind(var24)(var3);
            var3 = var18.bind(var24)();
            var6 = var3.done;
            var17 = null;
            var16 = 12;
            var15 = 1;
            var14 = var3;
            var13 = true;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var3 = true;
            if(var6) { _fun0007_ip = 57; continue _fun0007 }
case 25:
            var25 = var14.value;
            if(var5) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var31 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.GUILD_SIZE;
            var6 = var31.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 60; continue _fun0007 }
case 58:
            var32 = _closure1_slot9;
            var31 = var32.getMemberCount;
            var6 = var25;
            var6 = var6.id;
            var38 = var31.bind(var32)(var6);
            var6 = var17 == var38;
            var31 = false;
            var37 = var38;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(var6) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var6 = var22[var20];
            if(!(var17 != var6)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var6 = var22[var20];
            var6 = var38 < var6;
            var31 = false;
            var37 = var38;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(var6) { _fun0007_ip = 61; continue _fun0007 }
case 63:
            var6 = var22[var15];
            var12 = var38;
            if(!(var17 != var6)) { _fun0007_ip = 60; continue _fun0007 }
case 65:
            var6 = var22[var15];
            var6 = var38 > var6;
            var12 = var38;
            var31 = false;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(var6) { _fun0007_ip = 61; continue _fun0007 }
case 60:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_COMMUNITY;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var6 = var25;
            var39 = var6.features;
            var38 = var39.has;
            var6 = _closure1_slot14;
            var6 = var6.COMMUNITY;
            var6 = var38.bind(var39)(var6);
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!var6) { _fun0007_ip = 61; continue _fun0007 }
case 66:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_HUB;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var6 = var25;
            var39 = var6.features;
            var38 = var39.has;
            var6 = _closure1_slot14;
            var6 = var6.HUB;
            var6 = var38.bind(var39)(var6);
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!var6) { _fun0007_ip = 61; continue _fun0007 }
case 68:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.GUILD_PERMISSIONS;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var6 = var21.length;
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!(var20 !== var6)) { _fun0007_ip = 61; continue _fun0007 }
case 72:
            var27 = false;
            var6 = _closure1_slot28;
            var6 = var6.bind(var24)(var21);
            var28 = var6;
            var6 = var6.bind(var24)();
            var26 = var6;
            var6 = var6.done;
            if(var6) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var6 = var26;
            var29 = var6.value;
case 75: // try_start_0
            var38 = _closure1_slot2;
            var6 = _closure1_slot3;
            var6 = var6[var16];
            var39 = var38.bind(var24)(var6);
            var38 = var39.deserialize;
            var6 = var29;
            var40 = var38.bind(var39)(var6);
            var39 = _closure1_slot11;
            var38 = var39.can;
            var6 = var25;
            var6 = var38.bind(var39)(var40, var6);
            if(var6) { _fun0007_ip = 76; continue _fun0007 }
case 77: // try_end0
            _fun0007_ip = 78; continue _fun0007;
case 76: // try_start_1
            var27 = true;
case 79: // try_end1
            _fun0007_ip = 73; continue _fun0007;
case 80: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=5);
case 78:
            var6 = var28;
            var6 = var6.bind(var24)();
            var26 = var6;
            var6 = var6.done;
            if(!var6) { _fun0007_ip = 74; continue _fun0007 }
case 73:
            var6 = var27;
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!var6) { _fun0007_ip = 61; continue _fun0007 }
case 70:
            var38 = _closure1_slot13;
            var6 = var38.getCurrentUser;
            var41 = var6.bind(var38)();
            var6 = var17 == var41;
            var38 = undefined;
            if(var6) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var38 = var41.id;
case 81:
            var42 = var25;
            var6 = var42.ownerId;
            var40 = var38 === var6;
            var39 = _closure1_slot11;
            var38 = var39.can;
            var6 = _closure1_slot15;
            var6 = var6.ADMINISTRATOR;
            var39 = var38.bind(var39)(var6, var42);
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_OWNER;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var34 = var39;
            var33 = var8;
            var32 = var7;
            if(!var40) { _fun0007_ip = 61; continue _fun0007 }
case 83:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_ADMIN;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var33 = var8;
            var32 = var7;
            var34 = var39;
            if(!var34) { _fun0007_ip = 61; continue _fun0007 }
case 85:
            var6 = _closure1_slot21;
            if(!(var17 == var6)) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var38 = {};
            _fun0007_ip = 89; continue _fun0007;
case 87:
            var38 = _closure1_slot21;
case 89:
            _closure1_slot21 = var38;
            var6 = var30.key;
            var6 = var38[var6];
            if(!(var17 == var6)) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var38 = _closure1_slot21;
            var6 = var30.key;
            var38[var6] = var30;
case 90:
            var38 = _closure1_slot12;
            var6 = var38.getGuildId;
            var38 = var6.bind(var38)();
            var6 = var17 != var38;
            if(!var6) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var42 = var25;
            var42 = var42.id;
            var6 = var38 === var42;
case 92:
            var43 = var23.includes;
            var42 = _closure1_slot25;
            var42 = var42.IS_VIEWING;
            var42 = var43.bind(var23)(var42);
            if(!var42) { _fun0007_ip = 94; continue _fun0007 }
case 95:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var34 = var39;
            var33 = var38;
            var32 = var6;
            if(!var32) { _fun0007_ip = 61; continue _fun0007 }
case 94:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var34 = var39;
            var33 = var38;
            var32 = var6;
            var1 = true;
            if(!var5) { _fun0007_ip = 52; continue _fun0007 }
case 61:
            var38 = var18.bind(var24)();
            var6 = var38.done;
            var13 = var31;
            var12 = var37;
            var11 = var36;
            var10 = var35;
            var9 = var34;
            var8 = var33;
            var7 = var32;
            var14 = var38;
            var3 = var13;
            if(!var6) { _fun0007_ip = 25; continue _fun0007 }
case 57:
            var1 = false;
            if(!var5) { _fun0007_ip = 52; continue _fun0007 }
case 96:
            var1 = false;
            if(!var3) { _fun0007_ip = 52; continue _fun0007 }
case 97:
            var1 = true;
case 52:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var10 = function setSurvey(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.survey;
            var1 = false;
            _closure1_slot23 = var1;
            var2 = _closure1_slot18;
            var1 = global;
            var5 = var1.Date;
            var1 = var5.now;
            var1 = var1.bind(var5)();
            var2['lastFetched'] = var1;
            var1 = _closure1_slot18;
            var1 = var1.hiddenSurveys;
            var6 = null;
            if(!(var6 == var1)) { _fun0008_ip = 98; continue _fun0008 }
case 11:
            var2 = _closure1_slot18;
            var1 = {};
            var2['hiddenSurveys'] = var1;
case 98:
            var8 = var6 != var4;
            var9 = var8;
            if(!var8) { _fun0008_ip = 99; continue _fun0008 }
case 53:
            var1 = _closure1_slot18;
            var2 = var1.hiddenSurveys;
            var1 = var4.key;
            var1 = var2[var1];
            var9 = var6 == var1;
case 99:
            if(!var8) { _fun0008_ip = 100; continue _fun0008 }
case 101:
            var2 = _closure1_slot31;
            var1 = undefined;
            var8 = var2.bind(var1)(var4);
case 100:
            var7 = _closure1_slot19;
            if(var7) { _fun0008_ip = 102; continue _fun0008 }
case 103:
            var7 = _closure1_slot20;
case 102:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var10 = var2.Storage;
            var5 = var10.get;
            var2 = _closure1_slot16;
            var12 = var5.bind(var10)(var2);
            var5 = var6 == var12;
            if(var5) { _fun0008_ip = 104; continue _fun0008 }
case 105:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var2 = 14;
            var2 = var11[var2];
            var2 = var10.bind(var1)(var2);
            var11 = var2.bind(var1)();
            var10 = var11.diff;
            var2 = 'day';
            var10 = var10.bind(var11)(var12, var2);
            var2 = 7;
            var5 = var10 < var2;
case 104:
            var2 = null;
            if(!var9) { _fun0008_ip = 106; continue _fun0008 }
case 107:
            var2 = null;
            if(!var8) { _fun0008_ip = 106; continue _fun0008 }
case 108:
            var2 = null;
            if(var7) { _fun0008_ip = 106; continue _fun0008 }
case 59:
            var2 = null;
            if(var5) { _fun0008_ip = 106; continue _fun0008 }
case 27:
            var2 = var4;
case 106:
            _closure1_slot22 = var2;
            return var1;
        }
    };
    var _closure1_slot32 = var10;
    var1 = function handleSelectedGuildChange() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot22;
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 6; continue _fun0009 }
case 109:
            var5 = _closure1_slot22;
            var4 = _closure1_slot31;
            var3 = undefined;
            var4 = var4.bind(var3)(var5);
            var3 = !var4;
            var3 = !var3;
            if(var4) { _fun0009_ip = 110; continue _fun0009 }
case 111:
            _closure1_slot22 = var1;
            var3 = false;
case 110:
            if(var3) { _fun0009_ip = 112; continue _fun0009 }
case 6:
            var3 = _closure1_slot21;
            if(!(var1 == var3)) { _fun0009_ip = 113; continue _fun0009 }
case 114:
            var3 = {};
            _fun0009_ip = 115; continue _fun0009;
case 113:
            var3 = _closure1_slot21;
case 115:
            _closure1_slot21 = var3;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.values;
            var3 = _closure1_slot21;
            var4 = var4.bind(var5)(var3);
            var3 = 0;
            var6 = var4[var3];
            if(!(var1 != var6)) { _fun0009_ip = 116; continue _fun0009 }
case 45:
            var3 = _closure1_slot31;
            var5 = undefined;
            var3 = var3.bind(var5)(var6);
            if(!var3) { _fun0009_ip = 116; continue _fun0009 }
case 117:
            var4 = _closure1_slot32;
            var3 = {};
            var7 = 'SURVEY_FETCHED';
            var3['type'] = var7;
            var3['survey'] = var6;
            var3 = var4.bind(var5)(var3);
            _fun0009_ip = 118; continue _fun0009;
case 116:
            var3 = _closure1_slot22;
            if(!(var1 != var3)) { _fun0009_ip = 118; continue _fun0009 }
case 119:
            _closure1_slot22 = var1;
case 118:
            var1 = undefined;
            return var1;
case 112:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var4 = global;
    var12 = var4.Object;
    var9 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.GuildFeatures;
    var _closure1_slot14 = var9;
    var9 = var2.Permissions;
    var _closure1_slot15 = var9;
    var2 = var2.FIRST_RUN_DATE_KEY;
    var _closure1_slot16 = var2;
    var2 = {'hiddenSurveys': null, 'surveyOverride': null, 'lastFetched': null, 'lastSeen': null};
    var9 = {};
    var2['hiddenSurveys'] = var9;
    var9 = null;
    var _closure1_slot17 = var2;
    var _closure1_slot18 = var2;
    var2 = false;
    var _closure1_slot19 = var2;
    var _closure1_slot20 = var2;
    var12 = {};
    var _closure1_slot21 = var12;
    var _closure1_slot22 = var9;
    var _closure1_slot23 = var2;
    var2 = 86400000;
    var _closure1_slot24 = var2;
    var13 = {};
    var9 = 'is_owner';
    var13['IS_OWNER'] = var9;
    var9 = 'is_admin';
    var13['IS_ADMIN'] = var9;
    var9 = 'is_community';
    var13['IS_COMMUNITY'] = var9;
    var9 = 'guild_size';
    var13['GUILD_SIZE'] = var9;
    var9 = 'is_hub';
    var13['IS_HUB'] = var9;
    var9 = 'is_viewing';
    var13['IS_VIEWING'] = var9;
    var9 = 'guild_permissions';
    var13['GUILD_PERMISSIONS'] = var9;
    var9 = 'guild_size_all';
    var13['GUILD_SIZE_ALL'] = var9;
    var _closure1_slot25 = var13;
    var12 = var4.Set;
    var9 = var4.Object;
    var4 = var9.values;
    var16 = var4.bind(var9)(var13);
    var9 = var12.prototype;
    var9 = Object.create(var9, {constructor: {value: var12}});
    var17 = var9;
    var4 = new var17[var12](var16, var15);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot26 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function SurveyStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 120; continue _fun0010 }
case 49:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 121; continue _fun0010;
case 120:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 121:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 == var2)) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                var2 = _closure1_slot17;
case 122:
                _closure1_slot18 = var2;
                var3 = var4.syncWith;
                var5 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot33;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentSurvey';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = _closure1_slot30;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var1 = null;
                if(var3) { _fun0012_ip = 40; continue _fun0012 }
case 124:
                var1 = _closure1_slot22;
case 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSurveyOverride';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            var1 = var1.surveyOverride;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastSeenTimestamp';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot18;
            var1 = var1.lastSeen;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SurveyStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(3);
    var12 = function(arg1) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        var2 = delete var1.validSurveys;
        var2 = delete var1.currentSurvey;
        var2 = delete var1.iosIsPushNotificationClicked;
        var2 = delete var1.iosIsInviteShown;
        var2 = delete var1.iosFirstRunDate;
        return var1;
    };
    var4[0] = var12;
    var12 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var2 = var2.lastSeen;
            var3 = null;
            var4 = var3 != var2;
            if(!var4) { _fun0013_ip = 37; continue _fun0013 }
case 7:
            var3 = var2;
case 37:
            var2 = 'lastSeen';
            var1[var2] = var3;
            return var1;
        }
    };
    var4[1] = var12;
    var12 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.hiddenSurveys;
            var2 = null;
            if(!(var2 == var3)) { _fun0014_ip = 125; continue _fun0014 }
case 48:
            var3 = {};
case 125:
            var2 = 'hiddenSurveys';
            var1[var2] = var3;
            return var1;
        }
    };
    var4[2] = var12;
    var9['migrations'] = var4;
    var4 = 16;
    var4 = var7[var4];
    var16 = var8.bind(var1)(var4);
    var4 = {};
    var4['CONNECTION_OPEN'] = var11;
    var4['CONNECTION_RESUMED'] = var11;
    var4['SURVEY_FETCHED'] = var10;
    var10 = function handleSurveyHide(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var2 = var1.key;
            var1 = _closure1_slot18;
            var4 = var1.hiddenSurveys;
            var1 = true;
            var4[var2] = var1;
            var4 = null;
            _closure1_slot22 = var4;
            var1 = _closure1_slot21;
            if(!(var4 == var1)) { _fun0015_ip = 41; continue _fun0015 }
case 50:
            var1 = {};
            _fun0015_ip = 9; continue _fun0015;
case 41:
            var1 = _closure1_slot21;
case 9:
            _closure1_slot21 = var1;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var4['SURVEY_HIDE'] = var10;
    var10 = function handleSurveyOverride(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.id;
            var1 = _closure1_slot18;
            var1['surveyOverride'] = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0016_ip = 50; continue _fun0016 }
case 48:
            var1 = _closure1_slot18;
            var1 = var1.hiddenSurveys;
            var1 = delete var1[var3];
case 50:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.surveyFetch;
            var2 = _closure1_slot18;
            var3 = var2.surveyOverride;
            var2 = true;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var4['SURVEY_OVERRIDE'] = var10;
    var10 = function handlePushNotificationClick() {
        var1 = true;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var4['PUSH_NOTIFICATION_CLICK'] = var10;
    var10 = function handleInviteShow() {
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var4['DISPLAYED_INVITE_SHOW'] = var10;
    var10 = function handleLogout() {
        var2 = _closure1_slot18;
        var1 = {};
        var2['hiddenSurveys'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var10;
    var5 = function handleSurveySeen() {
        var2 = _closure1_slot18;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var2['lastSeen'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['SURVEY_SEEN'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/SurveyStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SURVEY_REFETCH_INTERVAL'] = var2;
    return var1;
})();